import { PropType } from 'vue';
import { PointerInterface, PointerIntersectCallbackType } from './usePointer';
import { RendererInterface } from './Renderer';
interface RaycasterSetupInterface {
    renderer?: RendererInterface;
    pointer?: PointerInterface;
}
declare const _default: import("vue").DefineComponent<{
    onPointerEnter: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerOver: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerMove: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerLeave: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onClick: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    intersectMode: {
        type: StringConstructor;
        default: string;
    };
    intersectRecursive: {
        type: BooleanConstructor;
        default: boolean;
    };
}, RaycasterSetupInterface, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onPointerEnter: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerOver: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerMove: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onPointerLeave: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    onClick: {
        type: PropType<PointerIntersectCallbackType>;
        default: PointerIntersectCallbackType;
    };
    intersectMode: {
        type: StringConstructor;
        default: string;
    };
    intersectRecursive: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    onClick: PointerIntersectCallbackType;
    intersectRecursive: boolean;
    onPointerEnter: PointerIntersectCallbackType;
    onPointerOver: PointerIntersectCallbackType;
    onPointerMove: PointerIntersectCallbackType;
    onPointerLeave: PointerIntersectCallbackType;
    intersectMode: string;
}>;
export default _default;
//# sourceMappingURL=Raycaster.d.ts.map