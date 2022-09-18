import { InjectionKey } from 'vue';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass';
import { RendererInterface } from '../core/Renderer';
interface EffectComposerSetupInterface {
    renderer?: RendererInterface;
    composer?: EffectComposer;
}
export interface EffectComposerInterface extends EffectComposerSetupInterface {
    addPass(pass: Pass): void;
    removePass(pass: Pass): void;
}
export declare const ComposerInjectionKey: InjectionKey<EffectComposerInterface>;
declare const _default: import("vue").DefineComponent<{}, EffectComposerSetupInterface, {}, {}, {
    addPass(pass: Pass): void;
    removePass(pass: Pass): void;
    resize(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
//# sourceMappingURL=EffectComposer.d.ts.map