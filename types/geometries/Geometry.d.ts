import { ComponentPropsOptions, PropType } from 'vue';
import { BufferGeometry } from 'three';
import { MeshInterface } from '../meshes/Mesh';
export interface GeometrySetupInterface {
    mesh?: MeshInterface;
    geometry?: BufferGeometry;
    watchProps?: string[];
}
export interface GeometryAttributeInterface {
    name: string;
    array: ArrayLike<number>;
    itemSize: number;
    normalized?: boolean;
}
declare const Geometry: import("vue").DefineComponent<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: PropType<GeometryAttributeInterface[]>;
        default: () => never[];
    };
}, GeometrySetupInterface, unknown, {}, {
    createGeometry(): void;
    rotateGeometry(): void;
    refreshGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: PropType<GeometryAttributeInterface[]>;
        default: () => never[];
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    attributes: GeometryAttributeInterface[];
}>;
export default Geometry;
export declare function geometryComponent<P extends Readonly<ComponentPropsOptions>>(name: string, props: P, createGeometry: {
    (c: any): BufferGeometry;
}): import("vue").DefineComponent<P, unknown, unknown, {}, {
    createGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: PropType<GeometryAttributeInterface[]>;
        default: () => never[];
    };
}, GeometrySetupInterface, unknown, {}, {
    createGeometry(): void;
    rotateGeometry(): void;
    refreshGeometry(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rotateX: NumberConstructor;
    rotateY: NumberConstructor;
    rotateZ: NumberConstructor;
    attributes: {
        type: PropType<GeometryAttributeInterface[]>;
        default: () => never[];
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    attributes: GeometryAttributeInterface[];
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<P extends ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<P> : P>, import("vue").ExtractDefaultPropTypes<P>>;
//# sourceMappingURL=Geometry.d.ts.map