import { defineComponent } from 'vue';
import Object3D from '../core/Object3D';
export default defineComponent({
    extends: Object3D,
    emits: ['before-load', 'load', 'progress', 'error'],
    props: {
        src: { type: String, required: true },
    },
    data() {
        return {
            progress: 0,
        };
    },
    methods: {
        onLoad(model) {
            this.$emit('load', model);
        },
        onProgress(progress) {
            this.progress = progress.loaded / progress.total;
            this.$emit('progress', progress);
        },
        onError(error) {
            this.$emit('error', error);
        },
    },
});
//# sourceMappingURL=Model.js.map