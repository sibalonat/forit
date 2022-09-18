import { Curve, TubeGeometry, Vector3 } from 'three';
export declare const props: {
    readonly points: ArrayConstructor;
    readonly path: typeof Curve;
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 64;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly closed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare function createGeometry(comp: any): TubeGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly points: ArrayConstructor;
    readonly path: typeof Curve;
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 64;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly closed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}, unknown, unknown, {}, {
    createGeometry(): void;
    updatePoints(points: Vector3[]): void;
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
    readonly points: ArrayConstructor;
    readonly path: typeof Curve;
    readonly tubularSegments: {
        readonly type: NumberConstructor;
        readonly default: 64;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly radialSegments: {
        readonly type: NumberConstructor;
        readonly default: 8;
    };
    readonly closed: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>>, {
    readonly closed: boolean;
    readonly radius: number;
    readonly radialSegments: number;
    readonly tubularSegments: number;
}>;
export default _default;
export declare function updateTubeGeometryPoints(tube: TubeGeometry, points: Vector3[]): void;
//# sourceMappingURL=TubeGeometry.d.ts.map