import { Object3D as TObject3D } from 'three';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
}, unknown, {
    progress: number;
}, {}, {
    onLoad(model: TObject3D): void;
    onProgress(progress: ProgressEvent): void;
    onError(error: ErrorEvent): void;
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
}, import("../core/Object3D").Object3DSetupInterface, unknown, {}, {
    initObject3D(o3d: TObject3D<import("three").Event>): void;
    getParent(): import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined;
    addToParent(o?: TObject3D<import("three").Event> | undefined): boolean;
    removeFromParent(o?: TObject3D<import("three").Event> | undefined): boolean;
    add(o: TObject3D<import("three").Event>): void;
    remove(o: TObject3D<import("three").Event>): void;
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
}>, ("error" | "progress" | "load" | "before-load")[], "progress" | "error" | "load" | "before-load", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    "onBefore-load"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
//# sourceMappingURL=Model.d.ts.map