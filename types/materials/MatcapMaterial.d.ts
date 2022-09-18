declare const _default: import("vue").DefineComponent<{
    src: StringConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {
    createMaterial(): import("three").Material;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    props: {
        type: import("vue").PropType<import("troisjs/src/materials/types").MaterialPropsInterface>;
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
        type: import("vue").PropType<import("troisjs/src/materials/types").MaterialPropsInterface>;
        default: () => {};
    };
}>> & {
    onCreated?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    props: import("troisjs/src/materials/types").MaterialPropsInterface;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    name: string;
}>;
export default _default;
//# sourceMappingURL=MatcapMaterial.d.ts.map