import { Object3D, Scene } from 'three';
import { ComponentPublicInstance, PropType } from 'vue';
import { RendererInterface } from './Renderer';
export interface Object3DSetupInterface {
    renderer?: RendererInterface;
    scene?: Scene;
    o3d?: Object3D;
    parent?: ComponentPublicInstance;
}
export interface Object3DInterface extends Object3DSetupInterface {
    addToParent(o?: Object3D): boolean;
    removeFromParent(o?: Object3D): boolean;
    add(o: Object3D): void;
    remove(o: Object3D): void;
}
export interface Object3DPublicInterface extends ComponentPublicInstance, Object3DInterface {
}
export declare const pointerProps: {
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
};
export interface Vector2PropInterface {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export interface Vector3PropInterface extends Vector2PropInterface {
    z?: number;
}
export interface EulerPropInterface extends Vector3PropInterface {
    order?: 'XYZ' | 'YZX' | 'ZXY' | 'XZY' | 'YXZ' | 'ZYX';
}
declare const _default: import("vue").DefineComponent<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<Vector3PropInterface>;
        default: null;
    };
    userData: {
        type: ObjectConstructor;
        default: () => {};
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
    disableAdd: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableRemove: {
        type: BooleanConstructor;
        default: boolean;
    };
}, Object3DSetupInterface, unknown, {}, {
    initObject3D(o3d: Object3D): void;
    getParent(): undefined | ComponentPublicInstance;
    addToParent(o?: Object3D): boolean;
    removeFromParent(o?: Object3D): boolean;
    add(o: Object3D): void;
    remove(o: Object3D): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("created" | "ready")[], "created" | "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<Vector3PropInterface>;
        default: null;
    };
    userData: {
        type: ObjectConstructor;
        default: () => {};
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
    disableAdd: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableRemove: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    position: Vector3PropInterface;
    scale: Vector3PropInterface;
    visible: boolean;
    rotation: EulerPropInterface;
    userData: Record<string, any>;
    lookAt: Vector3PropInterface;
    props: Record<string, any>;
    disableAdd: boolean;
    disableRemove: boolean;
}>;
export default _default;
//# sourceMappingURL=Object3D.d.ts.map