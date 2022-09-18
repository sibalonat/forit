import { PropType } from 'vue';
import { CubeCamera, Mesh, WebGLCubeRenderTarget } from 'three';
interface CubeCameraSetupInterface {
    cubeRT?: WebGLCubeRenderTarget;
    cubeCamera?: CubeCamera;
    updateRT?: {
        (): void;
    };
}
declare const _default: import("vue").DefineComponent<{
    cubeRTSize: {
        type: NumberConstructor;
        default: number;
    };
    cubeCameraNear: {
        type: NumberConstructor;
        default: number;
    };
    cubeCameraFar: {
        type: NumberConstructor;
        default: number;
    };
    autoUpdate: BooleanConstructor;
    hideMeshes: {
        type: PropType<Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>[]>;
        default: () => never[];
    };
}, CubeCameraSetupInterface, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: PropType<import("./Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("./Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("./Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("./Object3D").Vector3PropInterface>;
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
}, import("./Object3D").Object3DSetupInterface, unknown, {}, {
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
        type: PropType<import("./Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("./Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("./Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("./Object3D").Vector3PropInterface>;
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
    position: import("./Object3D").Vector3PropInterface;
    scale: import("./Object3D").Vector3PropInterface;
    visible: boolean;
    rotation: import("./Object3D").EulerPropInterface;
    userData: Record<string, any>;
    lookAt: import("./Object3D").Vector3PropInterface;
    props: Record<string, any>;
    disableAdd: boolean;
    disableRemove: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cubeRTSize: {
        type: NumberConstructor;
        default: number;
    };
    cubeCameraNear: {
        type: NumberConstructor;
        default: number;
    };
    cubeCameraFar: {
        type: NumberConstructor;
        default: number;
    };
    autoUpdate: BooleanConstructor;
    hideMeshes: {
        type: PropType<Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>[]>;
        default: () => never[];
    };
}>>, {
    cubeRTSize: number;
    cubeCameraNear: number;
    cubeCameraFar: number;
    autoUpdate: boolean;
    hideMeshes: Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>[];
}>;
export default _default;
//# sourceMappingURL=CubeCamera.d.ts.map