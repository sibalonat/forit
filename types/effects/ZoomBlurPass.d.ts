import { PropType } from 'vue';
import { Vector2PropInterface } from '../core/Object3D';
declare const _default: import("vue").DefineComponent<{
    center: {
        type: PropType<Vector2PropInterface>;
        default: () => {
            x: number;
            y: number;
        };
    };
    strength: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{}, import("./EffectPass").EffectSetupInterface, {}, {}, {
    initEffectPass(pass: import("three/examples/jsm/postprocessing/Pass").Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    center: {
        type: PropType<Vector2PropInterface>;
        default: () => {
            x: number;
            y: number;
        };
    };
    strength: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    center: Vector2PropInterface;
    strength: number;
}>;
export default _default;
//# sourceMappingURL=ZoomBlurPass.d.ts.map