declare const _default: import("vue").DefineComponent<{
    readonly focus: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly aperture: {
        readonly type: NumberConstructor;
        readonly default: 0.025;
    };
    readonly maxblur: {
        readonly type: NumberConstructor;
        readonly default: 0.01;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{}, import("./EffectPass").EffectSetupInterface, {}, {}, {
    initEffectPass(pass: import("three/examples/jsm/postprocessing/Pass").Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly focus: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly aperture: {
        readonly type: NumberConstructor;
        readonly default: 0.025;
    };
    readonly maxblur: {
        readonly type: NumberConstructor;
        readonly default: 0.01;
    };
}>>, {
    readonly focus: number;
    readonly aperture: number;
    readonly maxblur: number;
}>;
export default _default;
//# sourceMappingURL=BokehPass.d.ts.map