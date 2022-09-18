import { defineComponent, watch } from 'vue';
import { ShaderMaterial, TextureLoader } from 'three';
import { bindObjectProp } from '../tools';
import { MaterialInjectionKey } from './Material';
export default defineComponent({
    inject: {
        material: MaterialInjectionKey,
    },
    props: {
        name: { type: String, default: 'map' },
        uniform: String,
        src: String,
        onLoad: Function,
        onProgress: Function,
        onError: Function,
        props: { type: Object, default: () => ({}) },
    },
    setup() {
        return {};
    },
    created() {
        this.refreshTexture();
        watch(() => this.src, this.refreshTexture);
    },
    unmounted() {
        this.material?.setTexture(null, this.name);
        this.texture?.dispose();
    },
    methods: {
        createTexture() {
            if (!this.src)
                return undefined;
            return new TextureLoader().load(this.src, this.onLoaded, this.onProgress, this.onError);
        },
        initTexture() {
            if (!this.texture)
                return;
            bindObjectProp(this, 'props', this.texture);
            if (!this.material)
                return;
            this.material.setTexture(this.texture, this.name);
            if (this.material.material instanceof ShaderMaterial && this.uniform) {
                (this.material.material).uniforms[this.uniform] = { value: this.texture };
            }
        },
        refreshTexture() {
            this.texture?.dispose();
            this.texture = this.createTexture();
            this.initTexture();
        },
        onLoaded(t) {
            this.onLoad?.(t);
        },
    },
    render() { return []; },
});
//# sourceMappingURL=Texture.js.map