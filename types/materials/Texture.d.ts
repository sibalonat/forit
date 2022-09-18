import { PropType } from 'vue';
import { Texture } from 'three';
import { MaterialInterface } from './Material';
export interface TexureInterface {
    material?: MaterialInterface;
    texture?: Texture;
}
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    uniform: StringConstructor;
    src: StringConstructor;
    onLoad: PropType<(t: Texture) => void>;
    onProgress: PropType<(e: ProgressEvent) => void>;
    onError: PropType<(e: ErrorEvent) => void>;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}, TexureInterface, unknown, {}, {
    createTexture(): Texture | undefined;
    initTexture(): void;
    refreshTexture(): void;
    onLoaded(t: Texture): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    uniform: StringConstructor;
    src: StringConstructor;
    onLoad: PropType<(t: Texture) => void>;
    onProgress: PropType<(e: ProgressEvent) => void>;
    onError: PropType<(e: ErrorEvent) => void>;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    name: string;
    props: Record<string, any>;
}>;
export default _default;
//# sourceMappingURL=Texture.d.ts.map