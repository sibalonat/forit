import { Camera, Scene, WebGLRenderer, WebGLRendererParameters } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ComponentPublicInstance, InjectionKey, PropType } from 'vue';
import { PointerInterface, PointerPublicConfigInterface } from './usePointer';
import { SizeInterface, ThreeInterface } from './useThree';
declare type CallbackType<T> = (event: T) => void;
export interface EventInterface {
    type: 'init' | 'mounted';
    renderer: RendererInterface;
}
export interface RenderEventInterface {
    type: 'beforerender' | 'afterrender';
    renderer: RendererInterface;
    time: number;
}
export interface ResizeEventInterface {
    type: 'resize';
    renderer: RendererInterface;
    size: SizeInterface;
}
declare type InitCallbackType = CallbackType<EventInterface>;
declare type MountedCallbackType = CallbackType<EventInterface>;
declare type RenderCallbackType = CallbackType<RenderEventInterface>;
declare type ResizeCallbackType = CallbackType<ResizeEventInterface>;
interface EventCallbackMap {
    'init': InitCallbackType;
    'mounted': MountedCallbackType;
    'beforerender': RenderCallbackType;
    'afterrender': RenderCallbackType;
    'resize': ResizeCallbackType;
}
interface RenderFunctionEventInterface {
    renderer: RendererInterface;
    time: number;
}
interface RendererSetupInterface {
    canvas: HTMLCanvasElement;
    three: ThreeInterface;
    renderer: WebGLRenderer;
    size: SizeInterface;
    renderFn(e: RenderFunctionEventInterface): void;
    raf: boolean;
    $pointer?: PointerInterface;
    initCallbacks: InitCallbackType[];
    mountedCallbacks: MountedCallbackType[];
    beforeRenderCallbacks: RenderCallbackType[];
    afterRenderCallbacks: RenderCallbackType[];
    resizeCallbacks: ResizeCallbackType[];
}
export interface RendererInterface extends RendererSetupInterface {
    scene?: Scene;
    camera?: Camera;
    composer?: EffectComposer;
    onInit(cb: InitCallbackType): void;
    onMounted(cb: MountedCallbackType): void;
    onBeforeRender(cb: RenderCallbackType): void;
    offBeforeRender(cb: RenderCallbackType): void;
    onAfterRender(cb: RenderCallbackType): void;
    offAfterRender(cb: RenderCallbackType): void;
    onResize(cb: ResizeCallbackType): void;
    offResize(cb: ResizeCallbackType): void;
    addListener<T extends keyof EventCallbackMap>(t: T, cb: EventCallbackMap[T]): void;
    removeListener<T extends keyof EventCallbackMap>(t: T, cb: EventCallbackMap[T]): void;
}
export interface RendererPublicInterface extends ComponentPublicInstance, RendererInterface {
}
export declare const RendererInjectionKey: InjectionKey<RendererPublicInterface>;
declare const _default: import("vue").DefineComponent<{
    params: {
        type: PropType<WebGLRendererParameters>;
        default: () => {};
    };
    antialias: BooleanConstructor;
    alpha: BooleanConstructor;
    autoClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    orbitCtrl: {
        type: PropType<boolean | Record<string, unknown>>;
        default: boolean;
    };
    pointer: {
        type: PropType<boolean | PointerPublicConfigInterface>;
        default: boolean;
    };
    resize: {
        type: PropType<string | boolean>;
        default: boolean;
    };
    shadow: BooleanConstructor;
    width: StringConstructor;
    height: StringConstructor;
    pixelRatio: NumberConstructor;
    xr: BooleanConstructor;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
    onReady: PropType<(r: RendererInterface) => void>;
}, RendererSetupInterface, unknown, {
    camera: {
        get: () => Camera | undefined;
        set: (camera: Camera) => void;
    };
    scene: {
        get: () => Scene | undefined;
        set: (scene: Scene) => void;
    };
    composer: {
        get: () => EffectComposer | undefined;
        set: (composer: EffectComposer) => void;
    };
}, {
    onInit(cb: InitCallbackType): void;
    onMounted(cb: MountedCallbackType): void;
    onBeforeRender(cb: RenderCallbackType): void;
    offBeforeRender(cb: RenderCallbackType): void;
    onAfterRender(cb: RenderCallbackType): void;
    offAfterRender(cb: RenderCallbackType): void;
    onResize(cb: ResizeCallbackType): void;
    offResize(cb: ResizeCallbackType): void;
    addListener(type: string, cb: (e?: any) => void): void;
    removeListener(type: string, cb: (e?: any) => void): void;
    getCallbacks(type: string): InitCallbackType[] | RenderCallbackType[] | ResizeCallbackType[];
    render(time: number): void;
    renderLoop(time: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    params: {
        type: PropType<WebGLRendererParameters>;
        default: () => {};
    };
    antialias: BooleanConstructor;
    alpha: BooleanConstructor;
    autoClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    orbitCtrl: {
        type: PropType<boolean | Record<string, unknown>>;
        default: boolean;
    };
    pointer: {
        type: PropType<boolean | PointerPublicConfigInterface>;
        default: boolean;
    };
    resize: {
        type: PropType<string | boolean>;
        default: boolean;
    };
    shadow: BooleanConstructor;
    width: StringConstructor;
    height: StringConstructor;
    pixelRatio: NumberConstructor;
    xr: BooleanConstructor;
    props: {
        type: ObjectConstructor;
        default: () => {};
    };
    onReady: PropType<(r: RendererInterface) => void>;
}>>, {
    alpha: boolean;
    resize: string | boolean;
    shadow: boolean;
    params: WebGLRendererParameters;
    props: Record<string, any>;
    pointer: boolean | PointerPublicConfigInterface;
    antialias: boolean;
    autoClear: boolean;
    orbitCtrl: boolean | Record<string, unknown>;
    xr: boolean;
}>;
export default _default;
//# sourceMappingURL=Renderer.d.ts.map