import { defineComponent, watchEffect } from 'vue';
import { bindObjectProp } from '../tools';
import useThree from './useThree';
export const RendererInjectionKey = Symbol('Renderer');
export default defineComponent({
    name: 'Renderer',
    props: {
        params: { type: Object, default: () => ({}) },
        antialias: Boolean,
        alpha: Boolean,
        autoClear: { type: Boolean, default: true },
        orbitCtrl: { type: [Boolean, Object], default: false },
        pointer: { type: [Boolean, Object], default: false },
        resize: { type: [Boolean, String], default: false },
        shadow: Boolean,
        width: String,
        height: String,
        pixelRatio: Number,
        xr: Boolean,
        props: { type: Object, default: () => ({}) },
        onReady: Function,
    },
    inheritAttrs: false,
    setup(props, { attrs }) {
        const initCallbacks = [];
        const mountedCallbacks = [];
        const beforeRenderCallbacks = [];
        const afterRenderCallbacks = [];
        const resizeCallbacks = [];
        const canvas = document.createElement('canvas');
        Object.entries(attrs).forEach(([key, value]) => {
            const matches = key.match(/^on([A-Z][a-zA-Z]*)$/);
            if (matches) {
                canvas.addEventListener(matches[1].toLowerCase(), value);
            }
            else {
                canvas.setAttribute(key, value);
            }
        });
        const config = {
            canvas,
            params: props.params,
            antialias: props.antialias,
            alpha: props.alpha,
            autoClear: props.autoClear,
            orbitCtrl: props.orbitCtrl,
            pointer: props.pointer,
            resize: props.resize,
        };
        if (props.width)
            config.width = parseInt(props.width);
        if (props.height)
            config.height = parseInt(props.height);
        const three = useThree(config);
        bindObjectProp(props, 'props', three.renderer);
        watchEffect(() => {
            if (props.pixelRatio)
                three.renderer.setPixelRatio(props.pixelRatio);
        });
        const renderFn = () => { };
        return {
            canvas,
            three,
            renderer: three.renderer,
            size: three.size,
            renderFn,
            raf: true,
            initCallbacks,
            mountedCallbacks,
            beforeRenderCallbacks,
            afterRenderCallbacks,
            resizeCallbacks,
        };
    },
    computed: {
        camera: {
            get: function () { return this.three.camera; },
            set: function (camera) { this.three.camera = camera; },
        },
        scene: {
            get: function () { return this.three.scene; },
            set: function (scene) { this.three.scene = scene; },
        },
        composer: {
            get: function () { return this.three.composer; },
            set: function (composer) { this.three.composer = composer; },
        },
    },
    provide() {
        return {
            [RendererInjectionKey]: this,
        };
    },
    mounted() {
        // appendChild won't work on reload
        this.$el.parentNode.insertBefore(this.canvas, this.$el);
        if (this.three.init()) {
            if (this.three.pointer) {
                this.$pointer = this.three.pointer;
            }
            // TODO : don't use config
            this.three.config.onResize = (size) => {
                this.resizeCallbacks.forEach(e => e({ type: 'resize', renderer: this, size }));
            };
            if (this.shadow) {
                this.renderer.shadowMap.enabled = true;
            }
            this.renderFn = this.three.composer ? this.three.renderC : this.three.render;
            this.initCallbacks.forEach(e => e({ type: 'init', renderer: this }));
            this.onReady?.(this);
            if (this.xr) {
                this.renderer.xr.enabled = true;
                this.renderer.setAnimationLoop(this.render);
            }
            else {
                requestAnimationFrame(this.renderLoop);
            }
        }
        this.mountedCallbacks.forEach(e => e({ type: 'mounted', renderer: this }));
    },
    beforeUnmount() {
        this.canvas.remove();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
        this.raf = false;
        this.three.dispose();
    },
    methods: {
        onInit(cb) { this.addListener('init', cb); },
        onMounted(cb) { this.addListener('mounted', cb); },
        onBeforeRender(cb) { this.addListener('beforerender', cb); },
        offBeforeRender(cb) { this.removeListener('beforerender', cb); },
        onAfterRender(cb) { this.addListener('afterrender', cb); },
        offAfterRender(cb) { this.removeListener('afterrender', cb); },
        onResize(cb) { this.addListener('resize', cb); },
        offResize(cb) { this.removeListener('resize', cb); },
        addListener(type, cb) {
            const callbacks = this.getCallbacks(type);
            callbacks.push(cb);
        },
        removeListener(type, cb) {
            const callbacks = this.getCallbacks(type);
            const index = callbacks.indexOf(cb);
            if (index !== -1)
                callbacks.splice(index, 1);
        },
        getCallbacks(type) {
            if (type === 'init') {
                return this.initCallbacks;
            }
            else if (type === 'mounted') {
                return this.mountedCallbacks;
            }
            else if (type === 'beforerender') {
                return this.beforeRenderCallbacks;
            }
            else if (type === 'afterrender') {
                return this.afterRenderCallbacks;
            }
            else {
                return this.resizeCallbacks;
            }
        },
        render(time) {
            this.beforeRenderCallbacks.forEach(e => e({ type: 'beforerender', renderer: this, time }));
            // this.onFrame?.(cbParams)
            this.renderFn({ renderer: this, time });
            this.afterRenderCallbacks.forEach(e => e({ type: 'afterrender', renderer: this, time }));
        },
        renderLoop(time) {
            if (this.raf)
                requestAnimationFrame(this.renderLoop);
            this.render(time);
        },
    },
    render() {
        return this.$slots.default ? this.$slots.default() : [];
    },
    __hmrId: 'Renderer',
});
//# sourceMappingURL=Renderer.js.map