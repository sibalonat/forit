import { defineComponent, watch } from 'vue';
import { Mesh as TMesh } from 'three';
import Object3D from '../core/Object3D';
import { bindProp } from '../tools';
export const MeshInjectionKey = Symbol('Mesh');
const Mesh = defineComponent({
    name: 'Mesh',
    extends: Object3D,
    props: {
        castShadow: Boolean,
        receiveShadow: Boolean,
    },
    setup() {
        return {};
    },
    provide() {
        return {
            [MeshInjectionKey]: this,
        };
    },
    mounted() {
        // TODO : proper ?
        if (!this.mesh && !this.loading)
            this.initMesh();
    },
    methods: {
        initMesh() {
            const mesh = new TMesh(this.geometry, this.material);
            bindProp(this, 'castShadow', mesh);
            bindProp(this, 'receiveShadow', mesh);
            this.mesh = mesh;
            this.initObject3D(mesh);
        },
        createGeometry() { },
        addGeometryWatchers(props) {
            Object.keys(props).forEach(prop => {
                // @ts-ignore
                watch(() => this[prop], () => {
                    this.refreshGeometry();
                });
            });
        },
        setGeometry(geometry) {
            this.geometry = geometry;
            if (this.mesh)
                this.mesh.geometry = geometry;
        },
        setMaterial(material) {
            this.material = material;
            if (this.mesh)
                this.mesh.material = material;
        },
        refreshGeometry() {
            const oldGeo = this.geometry;
            this.createGeometry();
            if (this.mesh && this.geometry)
                this.mesh.geometry = this.geometry;
            oldGeo?.dispose();
        },
    },
    unmounted() {
        // for predefined mesh (geometry/material are not unmounted)
        if (this.geometry)
            this.geometry.dispose();
        if (this.material)
            this.material.dispose();
    },
    __hmrId: 'Mesh',
});
export default Mesh;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function meshComponent(name, props, createGeometry) {
    return defineComponent({
        name,
        extends: Mesh,
        props,
        created() {
            this.createGeometry();
            this.addGeometryWatchers(props);
        },
        methods: {
            createGeometry() {
                this.geometry = createGeometry(this);
            },
        },
    });
}
//# sourceMappingURL=Mesh.js.map