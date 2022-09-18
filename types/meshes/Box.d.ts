declare const _default: import("vue").DefineComponent<{
    readonly size: NumberConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly depth: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly widthSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly heightSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly depthSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
}, unknown, unknown, {}, {
    createGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    castShadow: BooleanConstructor;
    receiveShadow: BooleanConstructor;
}, import("./Mesh").MeshSetupInterface, unknown, {}, {
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
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
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
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    rotation: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").EulerPropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
    scale: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
        default: () => {
            x: number;
            y: number;
            z: number;
            order: string;
        };
    };
    lookAt: {
        type: import("vue").PropType<import("troisjs/src/core/Object3D").Vector3PropInterface>;
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
    readonly size: NumberConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly depth: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly widthSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly heightSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly depthSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
}>>, {
    readonly height: number;
    readonly width: number;
    readonly depth: number;
    readonly widthSegments: number;
    readonly heightSegments: number;
    readonly depthSegments: number;
}>;
export default _default;
//# sourceMappingURL=Box.d.ts.map