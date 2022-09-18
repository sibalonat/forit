import { PropType } from 'vue';
import { ShaderMaterial } from 'three';
export interface SubSurfaceMaterialUniformsInterface {
    diffuse?: string | number;
    thicknessColor?: string | number;
    thicknessDistortion?: number;
    thicknessAmbient?: number;
    thicknessAttenuation?: number;
    thicknessPower?: number;
    thicknessScale?: number;
}
declare const _default: import("vue").DefineComponent<{
    uniforms: {
        type: PropType<SubSurfaceMaterialUniformsInterface>;
        default: () => {
            diffuse: string;
            thicknessColor: string;
            thicknessDistortion: number;
            thicknessAmbient: number;
            thicknessAttenuation: number;
            thicknessPower: number;
            thicknessScale: number;
        };
    };
}, unknown, unknown, {}, {
    createMaterial(): ShaderMaterial;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<import("troisjs/src/materials/types").MaterialPropsInterface>;
        default: () => {};
    };
}, import("./Material").MaterialSetupInterface, unknown, {}, {
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
    setTexture(texture: import("three").Texture | null, key?: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "created"[], "created", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: PropType<import("troisjs/src/materials/types").MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: import("troisjs/src/materials/types").MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    uniforms: {
        type: PropType<SubSurfaceMaterialUniformsInterface>;
        default: () => {
            diffuse: string;
            thicknessColor: string;
            thicknessDistortion: number;
            thicknessAmbient: number;
            thicknessAttenuation: number;
            thicknessPower: number;
            thicknessScale: number;
        };
    };
}>>, {
    uniforms: SubSurfaceMaterialUniformsInterface;
}>;
export default _default;
//# sourceMappingURL=SubSurfaceMaterial.d.ts.map