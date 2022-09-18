import { defineComponent } from 'vue';
import Mesh from './Mesh';
import { props, createGeometry, updateTubeGeometryPoints } from '../geometries/TubeGeometry';
export default defineComponent({
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
        // update curve points (without using prop, faster)
        updatePoints(points) {
            updateTubeGeometryPoints(this.geometry, points);
        },
    },
    __hmrId: 'Tube',
});
//# sourceMappingURL=Tube.js.map