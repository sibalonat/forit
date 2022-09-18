import { ComponentPropsOptions, ComponentPublicInstance, InjectionKey, PropType } from 'vue';
import { Material, Texture } from 'three';
import { MeshInterface } from '../meshes/Mesh';
import { BasicMaterialPropsInterface, LambertMaterialPropsInterface, MaterialPropsInterface, PhongMaterialPropsInterface, PhysicalMaterialPropsInterface, PointsMaterialPropsInterface, StandardMaterialPropsInterface, ToonMaterialPropsInterface } from './types';
export interface MaterialSetupInterface {
    mesh?: MeshInterface;
    material?: Material;
    createMaterial?(): Material;
}
export interface MaterialInterface extends MaterialSetupInterface {
    setTexture(texture: Texture | null, key: string): void;
}
export interface MaterialPublicInterface extends ComponentPublicInstance, MaterialInterface {
}
export declare const MaterialInjectionKey: InjectionKey<MaterialPublicInterface>;
declare const BaseMaterial: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>;
export default BaseMaterial;
export declare function materialComponent<P extends Readonly<ComponentPropsOptions>>(name: string, props: P, createMaterial: {
    (opts: any): Material;
}): import("vue").DefineComponent<P, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<P extends ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<P> : P>, import("vue").ExtractDefaultPropTypes<P>>;
export declare const BasicMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<BasicMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<BasicMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: BasicMaterialPropsInterface;
}>;
export declare const LambertMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<LambertMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<LambertMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: LambertMaterialPropsInterface;
}>;
export declare const PhongMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<PhongMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<PhongMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: PhongMaterialPropsInterface;
}>;
export declare const PhysicalMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<PhysicalMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<PhysicalMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: PhysicalMaterialPropsInterface;
}>;
export declare const PointsMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<PointsMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<PointsMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: PointsMaterialPropsInterface;
}>;
export declare const ShadowMaterial: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    color: string;
    props: MaterialPropsInterface;
}>;
export declare const StandardMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<StandardMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<StandardMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: StandardMaterialPropsInterface;
}>;
export declare const ToonMaterial: import("vue").DefineComponent<{
    props: {
        type: PropType<ToonMaterialPropsInterface>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    createMaterial(): Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}, MaterialSetupInterface, unknown, {}, {
    getMaterialParams(): {
        [x: string]: any;
        alphaTest?: number | undefined;
        blending?: number | undefined;
        color?: string | number | undefined;
        depthTest?: boolean | undefined;
        depthWrite?: boolean | undefined;
        fog?: boolean | undefined;
        opacity?: number | undefined;
        side?: number | undefined;
        toneMapped?: boolean | undefined;
        transparent?: boolean | undefined;
        vertexColors?: boolean | undefined;
        visible?: boolean | undefined;
    };
    setProp(material: any, key: string, value: any, needsUpdate?: boolean): void;
    setTexture(texture: Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: PropType<ToonMaterialPropsInterface>;
        default: () => {};
    };
}>>, {
    props: ToonMaterialPropsInterface;
}>;
//# sourceMappingURL=Material.d.ts.map