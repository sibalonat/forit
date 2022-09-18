import { RingGeometry } from 'three';
export declare const props: {
    readonly innerRadius: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly outerRadius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly phiSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly thetaLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
};
export declare function createGeometry(comp: any): RingGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly innerRadius: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly outerRadius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly phiSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly thetaLength: {
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
    readonly innerRadius: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly outerRadius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly phiSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly thetaStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly thetaLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
}>>, {
    readonly thetaStart: number;
    readonly thetaLength: number;
    readonly innerRadius: number;
    readonly outerRadius: number;
    readonly thetaSegments: number;
    readonly phiSegments: number;
}>;
export default _default;
//# sourceMappingURL=RingGeometry.d.ts.map