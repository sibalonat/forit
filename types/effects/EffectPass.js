import { defineComponent } from 'vue';
import { RendererInjectionKey } from '../core/Renderer';
import { ComposerInjectionKey } from './EffectComposer';
export default defineComponent({
    // inject for sub components
    inject: {
        renderer: RendererInjectionKey,
        composer: ComposerInjectionKey,
    },
    emits: ['ready'],
    setup() {
        return {};
    },
    created() {
        if (!this.composer) {
            console.error('Missing parent EffectComposer');
        }
        if (!this.renderer) {
            console.error('Missing parent Renderer');
        }
    },
    unmounted() {
        if (this.pass) {
            this.composer?.removePass(this.pass);
            this.pass.dispose?.();
        }
    },
    methods: {
        initEffectPass(pass) {
            this.pass = pass;
            this.composer?.addPass(pass);
            this.$emit('ready', pass);
        },
    },
    render() {
        return [];
    },
    __hmrId: 'EffectPass',
});
//# sourceMappingURL=EffectPass.js.map