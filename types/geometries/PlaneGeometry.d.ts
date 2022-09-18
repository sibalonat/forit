import { PlaneGeometry } from 'three';
export declare const props: {
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
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
};
export declare function createGeometry(comp: any): PlaneGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
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
}, unknown, unknown, {}, {
    createGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: import("vue").PropType<import("./Geometry").GeometryAttributeInterface[]>;
        default: () => never[];
    };
}, import("./Geometry").GeometrySetupInterface, unknown, {}, {
    createGeometry(): void;
    rotateGeometry(): void;
    refreshGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: import("vue").PropType<import("./Geometry").GeometryAttributeInterface[]>;
        default: () => never[];
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    attributes: import("./Geometry").GeometryAttributeInterface[];
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
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
}>>, {
    readonly height: number;
    readonly width: number;
    readonly widthSegments: number;
    readonly heightSegments: number;
}>;
export default _default;
//# sourceMappingURL=PlaneGeometry.d.ts.map