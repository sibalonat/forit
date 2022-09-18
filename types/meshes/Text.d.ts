import { PropType } from 'vue';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { MeshSetupInterface } from './Mesh';
interface TextSetupInterface extends MeshSetupInterface {
    geometry?: TextGeometry;
    font?: Font;
}
declare const _default: import("vue").DefineComponent<{
    readonly text: {
        readonly type: StringConstructor;
        readonly required: true;
        readonly default: "Text";
    };
    readonly fontSrc: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 80;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly depth: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly curveSegments: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly bevelEnabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bevelThickness: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly bevelSize: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly bevelOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly bevelSegments: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly align: {
        readonly type: PropType<string | boolean>;
        readonly default: false;
    };
}, TextSetupInterface, unknown, {}, {
    createGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    castShadow: BooleanConstructor;
    receiveShadow: BooleanConstructor;
}, MeshSetupInterface, unknown, {}, {
    initMesh(): void;
    createGeometry(): void;
    addGeometryWatchers(props: Readonly<import("vue").ComponentPropsOptions<{
        [x: string]: unknown;
    }>>): void;
    setGeometry(geometry: import("three").BufferGeometry): void;
    setMaterial(material: import("three").Material): void;
    refreshGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    onPointerEnter: FunctionConstructor;
    onPointerOver: FunctionConstructor;
    onPointerMove: FunctionConstructor;
    onPointerLeave: FunctionConstructor;
    onPointerDown: FunctionConstructor;
    onPointerUp: FunctionConstructor;
    onClick: FunctionConstructor;
    position: {
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("troisjs/src/core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
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
}, import("troisjs/src/core/Object3D").Object3DSetupInterface, unknown, {}, {
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
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: PropType<import("troisjs/src/core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
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
    position: import("troisjs/src/core/Object3D").Vector3PropInterface;
    scale: import("troisjs/src/core/Object3D").Vector3PropInterface;
    visible: boolean;
    rotation: import("troisjs/src/core/Object3D").EulerPropInterface;
    userData: Record<string, any>;
    lookAt: import("troisjs/src/core/Object3D").Vector3PropInterface;
    props: Record<string, any>;
    disableAdd: boolean;
    disableRemove: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    castShadow: BooleanConstructor;
    receiveShadow: BooleanConstructor;
}>>, {
    castShadow: boolean;
    receiveShadow: boolean;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly text: {
        readonly type: StringConstructor;
        readonly required: true;
        readonly default: "Text";
    };
    readonly fontSrc: {
        readonly type: StringConstructor;
        readonly required: true;
    };
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 80;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly depth: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly curveSegments: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly bevelEnabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly bevelThickness: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly bevelSize: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly bevelOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly bevelSegments: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly align: {
        readonly type: PropType<string | boolean>;
        readonly default: false;
    };
}>>, {
    readonly height: number;
    readonly text: string;
    readonly size: number;
    readonly depth: number;
    readonly align: string | boolean;
    readonly curveSegments: number;
    readonly bevelEnabled: boolean;
    readonly bevelThickness: number;
    readonly bevelSize: number;
    readonly bevelOffset: number;
    readonly bevelSegments: number;
}>;
export default _default;
//# sourceMappingURL=Text.d.ts.map