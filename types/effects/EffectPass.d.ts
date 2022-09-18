import { Pass } from 'three/examples/jsm/postprocessing/Pass';
import { RendererInterface } from '../core/Renderer';
import { EffectComposerInterface } from './EffectComposer';
export interface EffectSetupInterface {
    renderer?: RendererInterface;
    composer?: EffectComposerInterface;
    pass?: Pass;
}
declare const _default: import("vue").DefineComponent<{}, EffectSetupInterface, {}, {}, {
    initEffectPass(pass: Pass): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "ready"[], "ready", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
//# sourceMappingURL=EffectPass.d.ts.map