<script>
import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// console.log(this.formId);
let serverMessage = {};
setOptions({
    server: {
        process: {
            url: `${window.location.href}/image`,
            // url: './image',
            // url: `./${this.formId}/image`,
            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },
            headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
            }
        }
    },
    labelFileProcessingError: () => {
        return serverMessage.error;
    }
});
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);


export default {
    props: {
        name: String,
        formId: Number
    },

    components: {
        FilePond
    },

    data() {
        return {
            images: [],
            url: ''
        }
    },
    created() {
        let u = `${window.location.href}/image`
        // console.log(u);
        // this.$refs.pond.server = u
        this.url = u
        console.log(this.url);
    },

    mounted() {
        console.log(this.name);
        // url: '.'+formId+'/image',
        console.log(this.formId);
        console.log(setOptions.server);
        // console.log(this.$refs.pond.server);
        let u = `${window.location.href}/image`
        // console.log(u);
        // this.$refs.pond.server.setAttribute('server', u)

        this.url = u
        console.log(this.url);
        console.log(this.$refs.pond.server);
        // /''+{formId}+''/image`
        // axios.get('/images')
        //     .then((response) => {
        //         this.images = response.data;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    },

    methods: {
        filepondInitialized() {
            console.log('Filepond is ready!');
            console.log('Filepond object:', this.$refs.pond);
        },
        handleProcessedFile(error, file) {
            if (error) {
                console.error(error);
                return;
            }
            // add the file to our images array
            this.images.unshift(file.serverId);
        }
    }

}
</script>


<template>
    <div>
        <!-- :server="{url}" -->
            <file-pond
                :name="name"
                ref="pond"
                label-idle="Click to choose image, or drag here..."
                @init="filepondInitialized"
                accepted-file-types="image/jpg, image/jpeg, image/png"
                @processfile="handleProcessedFile"
                max-file-size="1MB"
            />
    </div>
</template>
