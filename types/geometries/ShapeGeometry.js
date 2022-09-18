import { geometryComponent } from './Geometry';
import { ShapeGeometry } from 'three';
export const props = {
    shapes: { type: [Object, Array] },
    curveSegments: { type: Number },
};
export function createGeometry(comp) {
    return new ShapeGeometry(comp.shapes, comp.curveSegments);
}
export default geometryComponent('ShapeGeometry', props, createGeometry);
//# sourceMappingURL=ShapeGeometry.js.map