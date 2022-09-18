import { defineComponent, watch } from 'vue';
import { Color, MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, PointsMaterial as TPointsMaterial, ShadowMaterial as TShadowMaterial } from 'three';
import { MeshInjectionKey } from '../meshes/Mesh';
import { bindObjectProp, propsValues } from '../tools';
export const MaterialInjectionKey = Symbol('Material');
const BaseMaterial = defineComponent({
    emits: ['created'],
    props: {
        color: { type: String, default: '#ffffff' },
        props: { type: Object, default: () => ({}) },
    },
    inject: {
        mesh: MeshInjectionKey,
    },
    setup() {
        return {};
    },
    provide() {
        return {
            [MaterialInjectionKey]: this,
        };
    },
    created() {
        if (!this.mesh) {
            console.error('Missing parent Mesh');
            return;
        }
        if (this.createMaterial) {
            const material = this.material = this.createMaterial();
            // @ts-ignore
            watch(() => this.color, (value) => { material.color.set(value); });
            bindObjectProp(this, 'props', material, false, this.setProp);
            this.$emit('created', material);
            this.mesh.setMaterial(material);
        }
    },
    unmounted() {
        this.material?.dispose();
    },
    methods: {
        getMaterialParams() {
            return { ...propsValues(this.$props, ['props']), ...this.props };
        },
        setProp(material, key, value, needsUpdate = false) {
            const dstVal = material[key];
            if (dstVal instanceof Color)
                dstVal.set(value);
            else
                material[key] = value;
            material.needsUpdate = needsUpdate;
        },
        setTexture(texture, key = 'map') {
            this.setProp(this.material, key, texture, true);
        },
    },
    render() {
        return this.$slots.default ? this.$slots.default() : [];
    },
    __hmrId: 'Material',
});
export default BaseMaterial;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function materialComponent(name, props, createMaterial) {
    return defineComponent({
        name,
        extends: BaseMaterial,
        props,
        methods: {
            createMaterial() {
                return createMaterial(this.getMaterialParams());
            },
        },
    });
}
// TODO : proper
export const BasicMaterial = materialComponent('BasicMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshBasicMaterial(opts));
export const LambertMaterial = materialComponent('LambertMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshLambertMaterial(opts));
export const PhongMaterial = materialComponent('PhongMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshPhongMaterial(opts));
export const PhysicalMaterial = materialComponent('PhysicalMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshPhysicalMaterial(opts));
export const PointsMaterial = materialComponent('PointsMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new TPointsMaterial(opts));
export const ShadowMaterial = materialComponent('ShadowMaterial', { color: { type: String, default: '#000000' }, props: { type: Object, default: () => ({}) } }, (opts) => new TShadowMaterial(opts));
export const StandardMaterial = materialComponent('StandardMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshStandardMaterial(opts));
export const ToonMaterial = materialComponent('ToonMaterial', { props: { type: Object, default: () => ({}) } }, (opts) => new MeshToonMaterial(opts));
//# sourceMappingURL=Material.js.map