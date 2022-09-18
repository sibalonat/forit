import { Camera, Intersection, Object3D, Vector2, Vector3 } from 'three';
export interface RaycasterInterface {
    position: Vector3;
    updatePosition(coords: Vector2): void;
    intersect(coords: Vector2, objects: Object3D[], recursive?: boolean): Intersection[];
}
export interface RaycasterConfigInterface {
    camera: Camera;
    resetPosition?: Vector3;
}
export default function useRaycaster(options: RaycasterConfigInterface): RaycasterInterface;
//# sourceMappingURL=useRaycaster.d.ts.map