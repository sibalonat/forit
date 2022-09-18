import { defineComponent } from 'vue';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import EffectPass from './EffectPass';
export default defineComponent({
    extends: EffectPass,
    created() {
        const pass = new ShaderPass(FXAAShader);
        // resize will be first called in renderer init
        this.renderer?.addListener('resize', this.resize);
        this.initEffectPass(pass);
    },
    unmounted() {
        this.renderer?.removeListener('resize', this.resize);
    },
    methods: {
        resize({ size }) {
            if (this.pass) {
                const { resolution } = this.pass.material.uniforms;
                resolution.value.x = 1 / size.width;
                resolution.value.y = 1 / size.height;
            }
        },
    },
    __hmrId: 'FXAAPass',
});
//# sourceMappingURL=FXAAPass.js.map