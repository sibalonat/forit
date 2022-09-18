import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    urls: {
        type: PropType<string[]>;
        default: () => string[];
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            mapping: import("three").Mapping;
        };
    };
}, unknown, unknown, {}, {
    createTexture(): import("three").CubeTexture;
}, import("vue").ComponentOptionsMixin, import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    uniform: StringConstructor;
    src: StringConstructor;
    onLoad: PropType<(t: import("three").Texture) => void>;
    onProgress: PropType<(e: ProgressEvent<EventTarget>) => void>;
    onError: PropType<(e: ErrorEvent) => void>;
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
    onLoad: PropType<(t: import("three").Texture) => void>;
    onProgress: PropType<(e: ProgressEvent<EventTarget>) => void>;
    onError: PropType<(e: ErrorEvent) => void>;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    name: string;
    props: Record<string, any>;
}>, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    path: {
        type: StringConstructor;
        required: true;
    };
    urls: {
        type: PropType<string[]>;
        default: () => string[];
    };
    props: {
        type: ObjectConstructor;
        default: () => {
            mapping: import("three").Mapping;
        };
    };
}>>, {
    name: string;
    props: Record<string, any>;
    urls: string[];
}>;
export default _default;
//# sourceMappingURL=CubeTexture.d.ts.map