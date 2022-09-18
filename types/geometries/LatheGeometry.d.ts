import { LatheGeometry } from 'three';
export declare const props: {
    readonly points: ArrayConstructor;
    readonly segments: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly phiStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly phiLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
};
export declare function createGeometry(comp: any): LatheGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly points: ArrayConstructor;
    readonly segments: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly phiStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly phiLength: {
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
    readonly points: ArrayConstructor;
    readonly segments: {
        readonly type: NumberConstructor;
        readonly default: 12;
    };
    readonly phiStart: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly phiLength: {
        readonly type: NumberConstructor;
        readonly default: number;
    };
}>>, {
    readonly segments: number;
    readonly phiStart: number;
    readonly phiLength: number;
}>;
export default _default;
//# sourceMappingURL=LatheGeometry.d.ts.map