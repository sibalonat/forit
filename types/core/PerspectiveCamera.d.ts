import { PropType } from 'vue';
import { PerspectiveCamera } from 'three';
import { Vector3PropInterface } from './Object3D';
declare const _default: import("vue").DefineComponent<{
    aspect: {
        type: NumberConstructor;
        default: number;
    };
    far: {
        type: NumberConstructor;
        default: number;
    };
    fov: {
        type: NumberConstructor;
        default: number;
    };
    near: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    lookAt: {
        type: PropType<Vector3PropInterface>;
        default: null;
    };
}, {
    renderer: import("./Renderer").RendererPublicInterface;
    camera: PerspectiveCamera;
} | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    props: Record<string, any>;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    aspect: {
        type: NumberConstructor;
        default: number;
    };
    far: {
        type: NumberConstructor;
        default: number;
    };
    fov: {
        type: NumberConstructor;
        default: number;
    };
    near: {
        type: NumberConstructor;
        default: number;
    };
    position: {
        type: PropType<Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    lookAt: {
        type: PropType<Vector3PropInterface>;
        default: null;
    };
}>>, {
    position: Vector3PropInterface;
    fov: number;
    aspect: number;
    near: number;
    far: number;
    lookAt: Vector3PropInterface;
}>;
export default _default;
//# sourceMappingURL=PerspectiveCamera.d.ts.map