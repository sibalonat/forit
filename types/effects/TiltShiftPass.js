import { defineComponent, watch } from 'vue';
import { Vector2 } from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import EffectPass from './EffectPass';
import TiltShift from '../shaders/TiltShift';
import { bindProp } from '../tools';
const props = {
    blurRadius: { type: Number, default: 10 },
    gradientRadius: { type: Number, default: 100 },
    start: { type: Object, default: () => ({ x: 0, y: 100 }) },
    end: { type: Object, default: () => ({ x: 10, y: 100 }) },
};
export default defineComponent({
    extends: EffectPass,
    props,
    setup() {
        return { uniforms1: {}, uniforms2: {} };
    },
    created() {
        if (!this.composer)
            return;
        this.pass1 = new ShaderPass(TiltShift);
        this.pass2 = new ShaderPass(TiltShift);
        const uniforms1 = this.uniforms1 = this.pass1.uniforms;
        const uniforms2 = this.uniforms2 = this.pass2.uniforms;
        // shared uniforms
        uniforms2.blurRadius = uniforms1.blurRadius;
        uniforms2.gradientRadius = uniforms1.gradientRadius;
        uniforms2.start = uniforms1.start;
        uniforms2.end = uniforms1.end;
        uniforms2.texSize = uniforms1.texSize;
        bindProp(this, 'blurRadius', uniforms1.blurRadius, 'value');
        bindProp(this, 'gradientRadius', uniforms1.gradientRadius, 'value');
        this.updateFocusLine();
        ['start', 'end'].forEach(p => {
            // @ts-ignore
            watch(() => this[p], this.updateFocusLine, { deep: true });
        });
        this.pass1.setSize = (width, height) => {
            uniforms1.texSize.value.set(width, height);
        };
        this.initEffectPass(this.pass1);
        this.composer.addPass(this.pass2);
    },
    unmounted() {
        if (this.composer && this.pass2)
            this.composer.removePass(this.pass2);
    },
    methods: {
        updateFocusLine() {
            this.uniforms1.start.value.copy(this.start);
            this.uniforms1.end.value.copy(this.end);
            const dv = new Vector2().copy(this.end).sub(this.start).normalize();
            this.uniforms1.delta.value.copy(dv);
            this.uniforms2.delta.value.set(-dv.y, dv.x);
        },
    },
    __hmrId: 'TiltShiftPass',
});
//# sourceMappingURL=TiltShiftPass.js.map