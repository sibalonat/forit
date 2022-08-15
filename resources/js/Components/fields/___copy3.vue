<script setup>
import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { ref } from '@vue/reactivity';
import { onMounted, watch } from 'vue';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);


const props = defineProps({
    name: String,
    formId: Number
})


let idToDelete = ref('')
let pond = ref(null)
let routedel = ref('')
let images = ref([])


onMounted(() => {
    pond.value
    // console.log(pond.value);
    filepondInitialized()
    handleProcessedFile
})


let serverMessage = {};
setOptions({
    server: {
        process: {
            url: route('form.image', props.formId),

            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },

            headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
            }
        },

                // revert: {
        //     url: routedel.value,
        //     // url: idToDelete.value,
        //     // url: route('image.delete', [props.formId, idToDelete.value]),
        //     onerror: (response) => {
        //         console.log(response);
        //         serverMessage = JSON.parse(response);
        //     },

        //     headers: {
        //         'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        //     }
        // }


        revert: {
            url: routedel.value,
            // url: idToDelete.value,
            // url: route('image.delete', [props.formId, idToDelete.value]),
            onerror: (response) => {
                console.log(response);
                serverMessage = JSON.parse(response);
            },

            headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
            }
        }
    },
    // console.log();
    labelFileProcessingError: () => {
        return serverMessage.error;
    }
});


setOptions({
    server: {
        // form.edit
        url: route('form.edit', props.formId),
        process: {
            url: './image',

            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },


            // headers: {
            //     'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
            // }
        },
        revert: routedel.value,
        headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        },
        // onprocessfilerevert: (file) => {
        //     console.log(file);
        // },
        // revert: './'+props.formId+'/image/'+idToDelete.value,

    },
    // console.log();
    labelFileProcessingError: () => {
        return serverMessage.error;
    },

    // labelFileProcessingComplete: () => {
    //     return
    // }
});

setOptions({
    server: {
        // form.edit
        url: route('form.edit', props.formId),
        process: {
            url: './image',

            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },
        },
        revert: null,
        // revert: {
        //     // url: './image/''+idToDelete+,
        //     url: `/image/${idToDelete.value}`,
        //     // url: routedel.value,
        //     onprocessfilerevert: (file) => {
        //         console.log(file);
        //     }
        // },
        headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        },

    },
    // console.log();
    labelFileProcessingError: () => {
        return serverMessage.error;
    },

    // labelFileProcessingComplete: () => {
    //     return
    // }
});


watch(idToDelete, async (newId) => {
    idToDelete.value = newId
    routedel.value = route('image.delete', { form: props.formId, id: idToDelete.value })
})


function filepondInitialized () {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);
}

function handleProcessedFile(error, file) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log(file.serverId);

    // let obj = file.serverId
    let obj = JSON.parse(file.serverId)

    // this.idToDelete = obj.id

    idToDelete.value = obj.id
    console.log(this.idToDelete);

    // // let prs = JSON.parse(obj);
    console.log(images.value);


    if (Array.isArray(images.value)) {
        images.value.unshift(obj);
    }
}

// export default {
//     props: {
//         name: String,
//         formId: Number
//     },

//     components: {
//         FilePond
//     },



//     setup(props) {

//         // console.log(idToDelete);

//         let idToDelete = ref('')
//         let routedel = ref('')


//         watch(idToDelete, async (newId) => {
//             idToDelete.value = newId
//             routedel.value = route('image.delete', { form: props.formId, id: idToDelete.value })



//             // console.log(setOptions()[server]);
//             // console.log(setOptions.server.revert.url);
//         })

//         let serverMessage = {};
//         setOptions({
//             server: {
//                 process: {
//                     url: route('form.image', props.formId),

//                     onerror: (response) => {
//                         serverMessage = JSON.parse(response);
//                     },

//                     headers: {
//                         'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
//                     }
//                 },
//                 revert: {
//                     url: routedel.value,
//                     // url: idToDelete.value,
//                     // url: route('image.delete', [props.formId, idToDelete.value]),
//                     onerror: (response) => {
//                         console.log(response);
//                         serverMessage = JSON.parse(response);
//                     },

//                     headers: {
//                         'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
//                     }
//                 }
//             },
//             // console.log();
//             labelFileProcessingError: () => {
//                 return serverMessage.error;
//             }
//         });

//         // watch






//         return {
//             setOptions,
//             serverMessage,
//             idToDelete
//         }
//     },

//     data() {
//         return {
//             images: [],
//         }
//     },

//     mounted() {

//         axios.get(this.$route('form.images', this.formId))
//             .then((response) => {
//                 // console.log(response);
//                 this.images = response.data;
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     },

//     methods: {
//         filepondInitialized() {
//             console.log('Filepond is ready!');
//             console.log('Filepond object:', this.$refs.pond);
//         },
//         handleProcessedFile(error, file) {
//             if (error) {
//                 console.error(error);
//                 return;
//             }

//             // console.log(file.serverId);

//             // let obj = file.serverId
//             let obj = JSON.parse(file.serverId)

//             // this.idToDelete = obj.id

//             this.idToDelete = obj.id
//             console.log(this.idToDelete);

//             // // let prs = JSON.parse(obj);
//             console.log(this.images);


//             if (Array.isArray(this.images)) {
//                 this.images.unshift(obj);
//             }
//         }
//     }

// }
</script>


<template>
    <div>
        <!-- :server="{url}" -->
        <file-pond :name="name" ref="pond" credits="false" label-idle="Click to choose image, or drag here..."
            @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
            @processfile="handleProcessedFile" max-file-size="1MB" />
    </div>
</template>
