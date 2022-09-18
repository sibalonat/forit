import { BufferGeometry, Material, Points } from 'three';
import { Object3DSetupInterface } from '../core/Object3D';
export interface PointsSetupInterface extends Object3DSetupInterface {
    mesh?: Points;
    points?: Points;
    geometry?: BufferGeometry;
    material?: Material;
}
export interface PointsInterface extends PointsSetupInterface {
    setGeometry(geometry: BufferGeometry): void;
    setMaterial(material: Material): void;
}
declare const _default: import("vue").DefineComponent<{}, PointsSetupInterface, {}, {}, {
    setGeometry(geometry: BufferGeometry): void;
    setMaterial(material: Material): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: import("vue").PropType<import("../core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
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
    initObject3D(o3d: import("three").Object3D<import("three").Event>): void;
    getParent(): import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined;
    addToParent(o?: import("three").Object3D<import("three").Event> | undefined): boolean;
    removeFromParent(o?: import("three").Object3D<import("three").Event> | undefined): boolean;
    add(o: import("three").Object3D<import("three").Event>): void;
    remove(o: import("three").Object3D<import("three").Event>): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("created" | "ready")[], "created" | "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: import("vue").PropType<import("../core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: import("vue").PropType<import("../core/Object3D").Vector3PropInterface>;
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
    position: import("../core/Object3D").Vector3PropInterface;
    scale: import("../core/Object3D").Vector3PropInterface;
    visible: boolean;
    rotation: import("../core/Object3D").EulerPropInterface;
    userData: Record<string, any>;
    lookAt: import("../core/Object3D").Vector3PropInterface;
    props: Record<string, any>;
    disableAdd: boolean;
    disableRemove: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
//# sourceMappingURL=Points.d.ts.map