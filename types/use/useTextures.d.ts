import { Texture, TextureLoader } from 'three';
export interface TextureConfigInterface {
    src: string;
}
export interface TexturesInterface {
    loader: TextureLoader;
    count: number;
    textures: Texture[];
    loadProgress: number;
    loadTextures(images: TextureConfigInterface[], cb: {
        (): void;
    }): void;
    dispose(): void;
}
export default function useTextures(): TexturesInterface;
//# sourceMappingURL=useTextures.d.ts.map