import { PropType } from 'vue';
import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from 'three';
export declare const props: {
    readonly shapes: {
        readonly type: PropType<Shape | Shape[]>;
    };
    readonly options: {
        readonly type: PropType<ExtrudeGeometryOptions>;
    };
};
export declare function createGeometry(comp: any): ExtrudeGeometry;
declare const _default: import("vue").DefineComponent<{
    readonly shapes: {
        readonly type: PropType<Shape | Shape[]>;
    };
    readonly options: {
        readonly type: PropType<ExtrudeGeometryOptions>;
    };
}, unknown, unknown, {}, {
    createGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: PropType<import("./Geometry").GeometryAttributeInterface[]>;
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
        type: PropType<import("./Geometry").GeometryAttributeInterface[]>;
        default: () => never[];
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    attributes: import("./Geometry").GeometryAttributeInterface[];
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly shapes: {
        readonly type: PropType<Shape | Shape[]>;
    };
    readonly options: {
        readonly type: PropType<ExtrudeGeometryOptions>;
    };
}>>, {}>;
export default _default;
//# sourceMappingURL=ExtrudeGeometry.d.ts.map