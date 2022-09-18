import { defineComponent, inject, provide, watch } from 'vue';
import { Scene, Color, Texture } from 'three';
import { RendererInjectionKey } from './Renderer';
export const SceneInjectionKey = Symbol('Scene');
export default defineComponent({
    name: 'Scene',
    props: {
        background: [String, Number, Object],
    },
    setup(props) {
        const renderer = inject(RendererInjectionKey);
        const scene = new Scene();
        if (!renderer) {
            console.error('Renderer not found');
            return;
        }
        renderer.scene = scene;
        provide(SceneInjectionKey, scene);
        const setBackground = (value) => {
            if (!value)
                return;
            if (typeof value === 'string' || typeof value === 'number') {
                if (scene.background instanceof Color)
                    scene.background.set(value);
                else
                    scene.background = new Color(value);
            }
            else if (value instanceof Texture) {
                scene.background = value;
            }
        };
        setBackground(props.background);
        watch(() => props.background, setBackground);
        const add = (o) => { scene.add(o); };
        const remove = (o) => { scene.remove(o); };
        return { scene, add, remove };
    },
    render() {
        return this.$slots.default ? this.$slots.default() : [];
    },
    __hmrId: 'Scene',
});
//# sourceMappingURL=Scene.js.map