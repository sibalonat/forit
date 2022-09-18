import { PropType } from 'vue';
import { OrthographicCamera } from 'three';
import { Vector3PropInterface } from './Object3D';
declare const _default: import("vue").DefineComponent<{
    left: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    near: {
        type: NumberConstructor;
        default: number;
    };
    far: {
        type: NumberConstructor;
        default: number;
    };
    zoom: {
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
}, {
    renderer: import("./Renderer").RendererPublicInterface;
    camera: OrthographicCamera;
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
    left: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    near: {
        type: NumberConstructor;
        default: number;
    };
    far: {
        type: NumberConstructor;
        default: number;
    };
    zoom: {
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
}>>, {
    left: number;
    top: number;
    bottom: number;
    position: Vector3PropInterface;
    right: number;
    zoom: number;
    near: number;
    far: number;
}>;
export default _default;
//# sourceMappingURL=OrthographicCamera.d.ts.map