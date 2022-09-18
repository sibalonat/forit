import { InjectionKey } from 'vue';
import { Scene, Object3D } from 'three';
export declare const SceneInjectionKey: InjectionKey<Scene>;
declare const _default: import("vue").DefineComponent<{
    background: (ObjectConstructor | StringConstructor | NumberConstructor)[];
}, {
    scene: Scene;
    add: (o: Object3D) => void;
    remove: (o: Object3D) => void;
} | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    background: (ObjectConstructor | StringConstructor | NumberConstructor)[];
}>>, {}>;
export default _default;
//# sourceMappingURL=Scene.d.ts.map