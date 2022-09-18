import { defineComponent } from 'vue';
import { Points } from 'three';
import Object3D from '../core/Object3D';
import { MeshInjectionKey } from './Mesh';
// not really a mesh, but allow us to easily get geometry/material support
export default defineComponent({
    extends: Object3D,
    setup() {
        return {};
    },
    provide() {
        return {
            [MeshInjectionKey]: this,
        };
    },
    mounted() {
        this.mesh = this.points = new Points(this.geometry, this.material);
        this.initObject3D(this.mesh);
    },
    methods: {
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
    },
});
//# sourceMappingURL=Points.js.map