import { defineComponent, watch } from 'vue';
import { VideoTexture } from 'three';
import Texture from './Texture';
export default defineComponent({
    extends: Texture,
    props: {
        videoId: {
            type: String,
            required: true,
        },
    },
    created() {
        console.log(this.videoId);
        watch(() => this.videoId, this.refreshTexture);
    },
    methods: {
        createTexture() {
            const video = document.getElementById(this.videoId);
            return new VideoTexture(video);
        },
    },
});
//# sourceMappingURL=VideoTexture.js.map