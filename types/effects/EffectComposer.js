import { defineComponent, inject } from 'vue';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RendererInjectionKey } from '../core/Renderer';
export const ComposerInjectionKey = Symbol('Composer');
export default defineComponent({
    setup() {
        const renderer = inject(RendererInjectionKey);
        return { renderer };
    },
    provide() {
        return {
            [ComposerInjectionKey]: this,
        };
    },
    created() {
        if (!this.renderer) {
            console.error('Renderer not found');
            return;
        }
        const renderer = this.renderer;
        const composer = new EffectComposer(this.renderer.renderer);
        this.composer = composer;
        this.renderer.composer = composer;
        // this.renderer.onInit(() => {
        renderer.addListener('init', () => {
            renderer.renderer.autoClear = false;
            this.resize();
            renderer.addListener('resize', this.resize);
        });
    },
    unmounted() {
        this.renderer?.removeListener('resize', this.resize);
    },
    methods: {
        addPass(pass) {
            this.composer?.addPass(pass);
        },
        removePass(pass) {
            this.composer?.removePass(pass);
        },
        resize() {
            if (this.composer && this.renderer) {
                this.composer.setSize(this.renderer.size.width, this.renderer.size.height);
            }
        },
    },
    render() {
        return this.$slots.default ? this.$slots.default() : [];
    },
    __hmrId: 'EffectComposer',
});
//# sourceMappingURL=EffectComposer.js.map