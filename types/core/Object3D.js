import { defineComponent, getCurrentInstance, watch } from 'vue';
import { bindObjectProp, bindProp } from '../tools';
import { RendererInjectionKey } from './Renderer';
import { SceneInjectionKey } from './Scene';
// export function object3DSetup(): Object3DSetupInterface {
//   const renderer = inject(RendererInjectionKey)
//   const scene = inject(SceneInjectionKey)
//   return { scene, renderer }
// }
export const pointerProps = {
    onPointerEnter: Function,
    onPointerOver: Function,
    onPointerMove: Function,
    onPointerLeave: Function,
    onPointerDown: Function,
    onPointerUp: Function,
    onClick: Function,
};
export default defineComponent({
    name: 'Object3D',
    // inject for sub components
    inject: {
        renderer: RendererInjectionKey,
        scene: SceneInjectionKey,
    },
    emits: ['created', 'ready'],
    props: {
        position: { type: Object, default: () => ({ x: 0, y: 0, z: 0 }) },
        rotation: { type: Object, default: () => ({ x: 0, y: 0, z: 0 }) },
        scale: { type: Object, default: () => ({ x: 1, y: 1, z: 1, order: 'XYZ' }) },
        lookAt: { type: Object, default: null },
        userData: { type: Object, default: () => ({}) },
        visible: { type: Boolean, default: true },
        props: { type: Object, default: () => ({}) },
        disableAdd: { type: Boolean, default: false },
        disableRemove: { type: Boolean, default: false },
        ...pointerProps,
    },
    setup() {
        // return object3DSetup()
        return {};
    },
    created() {
        if (!this.renderer) {
            console.error('Missing parent Renderer');
        }
        if (!this.scene) {
            console.error('Missing parent Scene');
        }
    },
    unmounted() {
        if (!this.disableRemove)
            this.removeFromParent();
        if (this.o3d) {
            if (this.renderer)
                this.renderer.three.removeIntersectObject(this.o3d);
        }
    },
    methods: {
        initObject3D(o3d) {
            this.o3d = o3d;
            o3d.userData.component = this;
            if (this.onPointerEnter ||
                this.onPointerOver ||
                this.onPointerMove ||
                this.onPointerLeave ||
                this.onPointerDown ||
                this.onPointerUp ||
                this.onClick) {
                if (this.renderer)
                    this.renderer.three.addIntersectObject(o3d);
            }
            bindProp(this, 'position', o3d);
            bindProp(this, 'rotation', o3d);
            bindProp(this, 'scale', o3d);
            bindProp(this, 'userData', o3d.userData);
            bindProp(this, 'visible', o3d);
            bindObjectProp(this, 'props', o3d);
            this.$emit('created', o3d);
            if (this.lookAt)
                o3d.lookAt(this.lookAt.x ?? 0, this.lookAt.y, this.lookAt.z);
            watch(() => this.lookAt, (v) => { o3d.lookAt(v.x ?? 0, v.y, v.z); }, { deep: true });
            this.parent = this.getParent();
            if (!this.disableAdd) {
                if (this.addToParent())
                    this.$emit('ready', this);
                else
                    console.error('Missing parent (Scene, Group...)');
            }
        },
        getParent() {
            let parent = this.$parent;
            if (!parent) {
                // for script setup
                const instance = getCurrentInstance(); // ctx is internal
                if (instance && instance.parent)
                    parent = instance.parent.ctx;
            }
            while (parent) {
                if (parent.add)
                    return parent;
                parent = parent.$parent;
            }
            return undefined;
        },
        addToParent(o) {
            const o3d = o || this.o3d;
            if (this.parent) {
                this.parent.add(o3d);
                return true;
            }
            return false;
        },
        removeFromParent(o) {
            const o3d = o || this.o3d;
            if (this.parent) {
                this.parent.remove(o3d);
                return true;
            }
            return false;
        },
        add(o) { this.o3d?.add(o); },
        remove(o) { this.o3d?.remove(o); },
    },
    render() {
        return this.$slots.default ? this.$slots.default() : [];
    },
    __hmrId: 'Object3D',
});
//# sourceMappingURL=Object3D.js.map