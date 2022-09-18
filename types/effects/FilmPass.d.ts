declare const _default: import("vue").DefineComponent<{
    readonly noiseIntensity: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly scanlinesIntensity: {
        readonly type: NumberConstructor;
        readonly default: 0.05;
    };
    readonly scanlinesCount: {
        readonly type: NumberConstructor;
        readonly default: 4096;
    };
    readonly grayscale: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{}, import("./EffectPass").EffectSetupInterface, {}, {}, {
    initEffectPass(pass: import("three/examples/jsm/postprocessing/Pass").Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly noiseIntensity: {
        readonly type: NumberConstructor;
        readonly default: 0.5;
    };
    readonly scanlinesIntensity: {
        readonly type: NumberConstructor;
        readonly default: 0.05;
    };
    readonly scanlinesCount: {
        readonly type: NumberConstructor;
        readonly default: 4096;
    };
    readonly grayscale: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly noiseIntensity: number;
    readonly scanlinesIntensity: number;
    readonly scanlinesCount: number;
    readonly grayscale: number;
}>;
export default _default;
//# sourceMappingURL=FilmPass.d.ts.map