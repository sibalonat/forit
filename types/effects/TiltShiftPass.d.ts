import { PropType } from 'vue';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Vector2PropInterface } from '../core/Object3D';
interface TiltShiftPassSetupInterface {
    uniforms1: {
        [name: string]: {
            value: any;
        };
    };
    uniforms2: {
        [name: string]: {
            value: any;
        };
    };
    pass1?: ShaderPass;
    pass2?: ShaderPass;
}
declare const _default: import("vue").DefineComponent<{
    readonly blurRadius: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly gradientRadius: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly start: {
        readonly type: PropType<Vector2PropInterface>;
        readonly default: () => {
            x: number;
            y: number;
        };
    };
    readonly end: {
        readonly type: PropType<Vector2PropInterface>;
        readonly default: () => {
            x: number;
            y: number;
        };
    };
}, TiltShiftPassSetupInterface, unknown, {}, {
    updateFocusLine(): void;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{}, import("./EffectPass").EffectSetupInterface, {}, {}, {
    initEffectPass(pass: import("three/examples/jsm/postprocessing/Pass").Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly blurRadius: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly gradientRadius: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly start: {
        readonly type: PropType<Vector2PropInterface>;
        readonly default: () => {
            x: number;
            y: number;
        };
    };
    readonly end: {
        readonly type: PropType<Vector2PropInterface>;
        readonly default: () => {
            x: number;
            y: number;
        };
    };
}>>, {
    readonly end: Vector2PropInterface;
    readonly start: Vector2PropInterface;
    readonly blurRadius: number;
    readonly gradientRadius: number;
}>;
export default _default;
//# sourceMappingURL=TiltShiftPass.d.ts.map