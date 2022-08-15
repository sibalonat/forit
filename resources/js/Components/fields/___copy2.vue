<script>
import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// console.log(this.formId);
// let serverMessage = {};
// setOptions({
//     server: {
//         process: {
//             url: `${window.location.href}/image`,
//             onerror: (response) => {
//                 serverMessage = JSON.parse(response);
//             },

//             headers: {
//                 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
//             }
//         }
//     },
//     labelFileProcessingError: () => {
//         return serverMessage.error;
//     }
// });
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);

export default {
    props: {
        name: String,
        formId: Number
    },

    components: {
        FilePond
    },

    setup(props) {
        console.log(props.formId);
        let serverMessage = {};
        setOptions({
            server: {
                process: {
                    url: route('form.image', props.formId),
                    // url: `${window.location.href}/image`,
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


        return {
            setOptions,
            serverMessage
        }
    },

    data() {
        return {
            images: [],
        }
    },
    created() {
        // let u = `${window.location.href}/image`
        // console.log(u);
        // this.$refs.pond.server = u
        // this.url = u
        // console.log(this.url);
    },

    mounted() {

        axios.get(this.$route('form.images', this.formId))
            .then((response) => {
                // console.log(response);
                this.images = response.data;
            })
            .catch((error) => {
                console.error(error);
            });
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

            // console.log(file.serverId);

            // let obj = file.serverId
            let obj = JSON.parse(file.serverId)

            // // let prs = JSON.parse(obj);
            console.log(this.images);
            // console.log(obj.id);
            // console.log(obj.name);

            // console.log(this.images);
            // add the file to our images array
            // this.images.unshift(obj.name);

            if (Array.isArray(this.images)) {
                this.images.unshift(obj);
            }
        }
    }

}
</script>


<template>
    <div>
        <!-- :server="{url}" -->
        <file-pond :name="name" ref="pond" credits="false" label-idle="Click to choose image, or drag here..."
            @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
            @processfile="handleProcessedFile" max-file-size="1MB" />
    </div>
</template>
