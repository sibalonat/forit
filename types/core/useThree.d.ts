import { Camera, Object3D, Scene, WebGLRenderer, WebGLRendererParameters } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { PointerPublicConfigInterface, PointerInterface } from './usePointer';
export interface SizeInterface {
    width: number;
    height: number;
    wWidth: number;
    wHeight: number;
    ratio: number;
}
export interface ThreeConfigInterface {
    params?: WebGLRendererParameters;
    canvas?: HTMLCanvasElement;
    antialias: boolean;
    alpha: boolean;
    autoClear: boolean;
    orbitCtrl: boolean | Record<string, unknown>;
    pointer: boolean | PointerPublicConfigInterface;
    resize: boolean | string;
    width?: number;
    height?: number;
    onResize?(size: SizeInterface): void;
    [index: string]: any;
}
export interface ThreeInterface {
    config: ThreeConfigInterface;
    renderer: WebGLRenderer;
    composer?: EffectComposer;
    camera?: Camera;
    cameraCtrl?: OrbitControls;
    scene?: Scene;
    pointer?: PointerInterface;
    size: SizeInterface;
    init(): boolean;
    dispose(): void;
    render(): void;
    renderC(): void;
    setSize(width: number, height: number): void;
    addIntersectObject(o: Object3D): void;
    removeIntersectObject(o: Object3D): void;
}
/**
 * Three.js helper
 */
export default function useThree(params: ThreeConfigInterface): ThreeInterface;
//# sourceMappingURL=useThree.d.ts.map