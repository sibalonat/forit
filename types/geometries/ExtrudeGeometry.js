import { geometryComponent } from './Geometry';
import { ExtrudeGeometry } from 'three';
export const props = {
    shapes: { type: [Object, Array] },
    options: { type: Object },
};
export function createGeometry(comp) {
    return new ExtrudeGeometry(comp.shapes, comp.options);
}
export default geometryComponent('ExtrudeGeometry', props, createGeometry);
//# sourceMappingURL=ExtrudeGeometry.js.map