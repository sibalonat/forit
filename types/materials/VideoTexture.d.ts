import { VideoTexture } from 'three';
declare const _default: import("vue").DefineComponent<{
    videoId: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {}, {
    createTexture(): VideoTexture;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    uniform: StringConstructor;
    src: StringConstructor;
    onLoad: import("vue").PropType<(t: import("three").Texture) => void>;
    onProgress: import("vue").PropType<(e: ProgressEvent<EventTarget>) => void>;
    onError: import("vue").PropType<(e: ErrorEvent) => void>;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}, import("./Texture").TexureInterface, unknown, {}, {
    createTexture(): import("three").Texture | undefined;
    initTexture(): void;
    refreshTexture(): void;
    onLoaded(t: import("three").Texture): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    uniform: StringConstructor;
    src: StringConstructor;
    onLoad: import("vue").PropType<(t: import("three").Texture) => void>;
    onProgress: import("vue").PropType<(e: ProgressEvent<EventTarget>) => void>;
    onError: import("vue").PropType<(e: ErrorEvent) => void>;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    name: string;
    props: Record<string, any>;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    videoId: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
export default _default;
//# sourceMappingURL=VideoTexture.d.ts.map