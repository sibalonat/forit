declare const _default: import("vue").DefineComponent<{
    readonly strength: {
        readonly type: NumberConstructor;
        readonly default: 1.5;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly threshold: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{}, import("./EffectPass").EffectSetupInterface, {}, {}, {
    initEffectPass(pass: import("three/examples/jsm/postprocessing/Pass").Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly strength: {
        readonly type: NumberConstructor;
        readonly default: 1.5;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly threshold: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
}>>, {
    readonly threshold: number;
    readonly radius: number;
    readonly strength: number;
}>;
export default _default;
//# sourceMappingURL=UnrealBloomPass.d.ts.map