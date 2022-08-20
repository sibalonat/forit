<script setup>
import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { reactive, ref } from '@vue/reactivity';
import { onBeforeMount, onMounted, watch } from 'vue';

const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);


const props = defineProps({
    name: String,
    formId: Number,
    save: Array,
})

let emit = defineEmits(['change-file'])
// const emit = defineEmits(['change'])
let element = props.save[0]

let idToDelete = ref('')
let pond = ref(null)
let routedel = ref('')
// let images = ref([])

let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})
// let image = reactive([])
// let image = reactive([{}])

let serverMessage = {};
let db = reactive({
    server: {
        url: route('form.edit', props.formId),
        process: {
            url: '/image',

            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },
        },
        revert: null,

        headers: header.headers,
        // headers: {
        //     'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        // },
        labelFileProcessingError: () => {
            return serverMessage.error;
        },

    }
})


// reactive

// onBeforeMount(() => {
//     FilePond

//     let element = props.save[0]

//     axios
//     .get(route('image.show', { form: props.formId, id: element.id }))
//     .then((response) => {
//         // console.log(response);
//         images.value.unshift(response.data)
//         console.log(images.value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })


onMounted(() => {
    pond.value.getFiles()
    console.log(pond.value.getFiles());
    // console.log();
    filepondInitialized
    handleProcessedFile
    imageDelete
    db
    // console.log(db);
    // imageLoad()
    FilePond

    // let element = props.save[0]

    // axios
    // .get(route('image.show', { form: props.formId, id: element.id }))
    // .then((response) => {
    //     // console.log(response);
    //     images.value.unshift(response.data)
    //     console.log(images.value);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })

    // console.log(FilePond);

    // console.log(props.save.shift().id);
    // console.log(props.save.shift().id);
    // let element = props.save.shift()
    // let element = props.save[0]
    // console.log(element.id);

    // axios
    // .get(route('image.show', { form: props.formId, id: element.id }))
    // .then((response) => {
    //     // console.log(response);
    //     image = response.data
    //     console.log(image);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })

    // console.log(header);
    // console.log(images.value);

    // console.log(props.save);
})

watch(idToDelete, async (newId) => {
    idToDelete.value = newId
    routedel.value = route('image.delete', { form: props.formId, id: idToDelete.value })
    console.log(routedel.value);
})

// console.log(image);
// watch(image, async (newImg) => {
//     console.log(image);
//     console.log(newImg);
// })


// let serverMessage = {};
setOptions({
    server: {
        // form.edit
        url: route('form.edit', props.formId),
        process: {
            url: '/image',

            onerror: (response) => {
                serverMessage = JSON.parse(response);
            },
        },
        revert: null,
        load: null,
        // load: {
        //     source: route('image.show', { form: props.formId, id: element.id })[original_url],
        //     onerror: (response) => {
        //         console.log(response);
        //     },
        //     onload: (response) => {
        //         console.log(response);
        //     },
        //     ondata: (response) => {
        //         console.log(response);
        //     },
        // },
        // load: (source, load, error, progress, abort, headers) => {
        //     // Should request a file object from the server here
        //     // ...

        //     async let img = axios
        //                     .get(route('image.show', { form: props.formId, id: element.id }))
        //                     .then((response) => {
        //                         // console.log(response);
        //                         image = response.data
        //                         console.log(image);
        //                     })



        //     // Can call the error method if something is wrong, should exit after
        //     error('oh my goodness');

        //     // Can call the header method to supply FilePond with early response header string
        //     // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
        //     headers(header);

        //     // Should call the progress method to update the progress to 100% before calling load
        //     // (endlessMode, loadedSize, totalSize)
        //     progress(true, 0, 1024);

        //     source
        //     console.log(source);

        //     // Should call the load method with a file object or blob when done
        //     load(file);

        //     // Should expose an abort method so the request can be cancelled
        //     return {
        //         abort: () => {
        //             // User tapped cancel, abort our ongoing actions here

        //             // Let FilePond know the request has been cancelled
        //             abort();
        //         },
        //     };
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



async function filepondInitialized() {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);

    let element = props.save[0]

    let img = await axios.get(route('image.show', { form: props.formId, id: element.id }), header)
    .then((response) => {
        // console.log(response);
        // image = response.data
        console.log(response);
    })
    // .catch((error) => {
    //     console.log(error);
    // })

    console.log(img);

    await pond.value.addFile({

        source: "img.data.original_url",
        options: {
            type: 'local'
        }

    })
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

    emit('change-file', obj)

    // console.log(emit);
    // console.log(idToDelete);

    // // let prs = JSON.parse(obj);
    // console.log(images.value);


    if (Array.isArray(images.value)) {
        images.value.unshift(obj);
    }
}

// :files="imagenesAnuncioFilePond"

// async function imageLoad(error) {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     // :images="image"

//     let element = props.save[0]


//     let img = await axios
//     .get(route('image.show', { form: props.formId, id: element.id }))
//     // .then((response) => {
//     //     // console.log(response);
//     //     image = response.data
//     //     console.log(image);
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // })

//     console.log(img.data.original_url);

//     image.unshift(img.data)
//     console.log(image);

//     return image


// }

function imageDelete(error) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log();

    axios.delete(`${routedel.value}`, header)
        .catch(function (error) {
            console.log(error);
        })
    // axios.delete(`${routedel.value}`, {headers: {'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content},})
    // .catch(function (error) {
    //     console.log(error);
    // })

    // console.log(images.value[images.value.length - 1]);

    // emit('change-file', [images.value[images.value.length - 1], 'delete'])


    // console.log(file);

}

</script>
<!-- :files="images[0].original_url" -->

<template>
    <div>
        <!-- :files="imageLoad" -->

        <!-- {{ imageLoad }} -->
        <!-- {{ images[0].original_url }} -->
        <!-- :files="images[0].original_url" -->

        <FilePond :name="name" ref="pond" credits="false" label-idle="Click to choose image, or drag here..."
            :server="db.server" @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
            @processfile="handleProcessedFile" @removefile="imageDelete" max-file-size="1MB" />
    </div>
</template>
