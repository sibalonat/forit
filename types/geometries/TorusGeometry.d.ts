import { TorusGeometry } from 'three';
export declare const props: {
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tube: {
        readonly type: NumberConstructor;
        readonly default: 0.4;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly arc: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
};
export declare function createGeometry(comp: any): TorusGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tube: {
        readonly type: NumberConstructor;
        readonly default: 0.4;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly arc: {
        readonly type: NumberConstructor;
        readonly default: number;
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
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly tube: {
        readonly type: NumberConstructor;
        readonly default: 0.4;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly arc: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
}>>, {
    readonly radius: number;
    readonly radialSegments: number;
    readonly tube: number;
    readonly tubularSegments: number;
    readonly arc: number;
}>;
export default _default;
//# sourceMappingURL=TorusGeometry.d.ts.map