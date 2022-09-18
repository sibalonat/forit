import { Camera, Intersection, Object3D, Vector2, Vector3 } from 'three';
export interface PointerEventInterface {
    type: 'pointerenter' | 'pointermove' | 'pointerleave' | 'click';
    position?: Vector2;
    positionN?: Vector2;
    positionV3?: Vector3;
}
export interface PointerIntersectEventInterface {
    type: 'pointerenter' | 'pointerover' | 'pointermove' | 'pointerleave' | 'click';
    component: any;
    over?: boolean;
    intersect?: Intersection;
}
export declare type PointerCallbackType = (e: PointerEventInterface) => void;
export declare type PointerIntersectCallbackType = (e: PointerIntersectEventInterface) => void;
export interface PointerPublicConfigInterface {
    intersectMode?: 'frame';
    intersectRecursive?: boolean;
    touch?: boolean;
    resetOnEnd?: boolean;
    onEnter?: PointerCallbackType;
    onMove?: PointerCallbackType;
    onLeave?: PointerCallbackType;
    onClick?: PointerCallbackType;
    onIntersectEnter?: PointerIntersectCallbackType;
    onIntersectOver?: PointerIntersectCallbackType;
    onIntersectMove?: PointerIntersectCallbackType;
    onIntersectLeave?: PointerIntersectCallbackType;
    onIntersectClick?: PointerIntersectCallbackType;
}
export interface PointerConfigInterface extends PointerPublicConfigInterface {
    camera: Camera;
    domElement: HTMLCanvasElement;
    intersectObjects: Object3D[] | (() => Object3D[]);
}
export interface PointerInterface {
    position: Vector2;
    positionN: Vector2;
    positionV3: Vector3;
    intersectObjects: Object3D[] | (() => Object3D[]);
    listeners: boolean;
    addListeners(cb: void): void;
    removeListeners(cb: void): void;
    intersect(): void;
}
export default function usePointer(options: PointerConfigInterface): PointerInterface;
//# sourceMappingURL=usePointer.d.ts.map