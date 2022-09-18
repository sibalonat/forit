import { CylinderGeometry } from 'three';
export declare const props: {
    readonly radiusTop: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radiusBottom: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly heightSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly openEnded: {
        readonly type: BooleanConstructor;
        readonly default: false;
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
export declare function createGeometry(comp: any): CylinderGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly radiusTop: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radiusBottom: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly heightSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly openEnded: {
        readonly type: BooleanConstructor;
        readonly default: false;
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
    readonly radiusTop: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radiusBottom: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly heightSegments: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly openEnded: {
        readonly type: BooleanConstructor;
        readonly default: false;
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
    readonly height: number;
    readonly heightSegments: number;
    readonly thetaStart: number;
    readonly thetaLength: number;
    readonly radialSegments: number;
    readonly openEnded: boolean;
    readonly radiusTop: number;
    readonly radiusBottom: number;
}>;
export default _default;
//# sourceMappingURL=CylinderGeometry.d.ts.map