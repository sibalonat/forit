import { Light } from 'three';
import { PropType } from 'vue';
import { Vector2PropInterface } from '../core/Object3D';
export interface LightSetupInterface {
    light?: Light;
}
declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
    };
    castShadow: {
        type: BooleanConstructor;
        default: boolean;
    };
    shadowMapSize: {
        type: PropType<Vector2PropInterface>;
        default: () => {
            x: number;
            y: number;
        };
    };
    shadowCamera: {
        type: ObjectConstructor;
        default: () => {};
    };
}, LightSetupInterface, unknown, {}, {
    initLight(light: Light): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("../core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
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
}, import("../core/Object3D").Object3DSetupInterface, unknown, {}, {
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
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("../core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("../core/Object3D").Vector3PropInterface>;
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
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    intensity: {
        type: NumberConstructor;
        default: number;
    };
    castShadow: {
        type: BooleanConstructor;
        default: boolean;
    };
    shadowMapSize: {
        type: PropType<Vector2PropInterface>;
        default: () => {
            x: number;
            y: number;
        };
    };
    shadowCamera: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    color: string;
    castShadow: boolean;
    intensity: number;
    shadowMapSize: Vector2PropInterface;
    shadowCamera: Record<string, any>;
}>;
export default _default;
//# sourceMappingURL=Light.d.ts.map