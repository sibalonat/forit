import { PolyhedronGeometry } from 'three';
export declare const props: {
    readonly vertices: ArrayConstructor;
    readonly indices: ArrayConstructor;
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly detail: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
};
export declare function createGeometry(comp: any): PolyhedronGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly vertices: ArrayConstructor;
    readonly indices: ArrayConstructor;
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly detail: {
        readonly type: NumberConstructor;
        readonly default: 0;
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
    readonly vertices: ArrayConstructor;
    readonly indices: ArrayConstructor;
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly detail: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly detail: number;
    readonly radius: number;
}>;
export default _default;
//# sourceMappingURL=PolyhedronGeometry.d.ts.map