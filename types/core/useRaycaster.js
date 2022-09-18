import { Plane, Raycaster, Vector3 } from 'three';
export default function useRaycaster(options) {
    const { camera, resetPosition = new Vector3(0, 0, 0), } = options;
    const raycaster = new Raycaster();
    const position = resetPosition.clone();
    const plane = new Plane(new Vector3(0, 0, 1), 0);
    const updatePosition = (coords) => {
        raycaster.setFromCamera(coords, camera);
        camera.getWorldDirection(plane.normal);
        raycaster.ray.intersectPlane(plane, position);
    };
    const intersect = (coords, objects, recursive = false) => {
        raycaster.setFromCamera(coords, camera);
        return raycaster.intersectObjects(objects, recursive);
    };
    return {
        position,
        updatePosition,
        intersect,
    };
}
//# sourceMappingURL=useRaycaster.js.map