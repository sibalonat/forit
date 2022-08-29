<script setup>
import vueFilePond from 'vue-filepond';
// import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { reactive, ref } from '@vue/reactivity';
import { onMounted, watch, watchEffect } from 'vue';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster
);
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);


const props = defineProps({
    name: String,
    formId: Number,
    saved: Array,
})

let emit = defineEmits(['change-file', 'delete-file'])
// const emit = defineEmits(['change'])

console.log(props.saved);



let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})

let idToDelete = ref('')
let pond = ref(null)
let routedel = ref('')
let images = ref([])
let img = reactive({})


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

        headers: {
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        },
        labelFileProcessingError: () => {
            return serverMessage.error;
        },

    }
})


onMounted(() => {

    filepondInitialized
    handleProcessedFile
    imageDelete
    db

    FilePond

})

watch(idToDelete, async (newId) => {
    idToDelete.value = newId

    routedel.value = route('image.delete', { form: props.formId, id: idToDelete.value })
})




const watcher = watchEffect(() => {
    if (props.saved) {
        let element = props.saved[0]
        console.log('exists');
        console.log(props.saved);
        routedel.value = route('image.delete', { form: element.formID, id: element.id })
    }

    console.log(routedel.value);
})
// watchEffect


async function filepondInitialized() {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);

    if (props.saved) {
        let element = props.saved[0]

        await axios.get(route('image.show', { form: element.formID, id: element.id }), header)
            .then((response) => {
                console.log(response);

                // image = response.data
                img = response.data
                console.log(img);
            })
            .catch((error) => {
                console.log(error);
            })

        await pond.value.addFile(
            img,
            // img.name,
            {
                type: 'local',
                metadata: {
                    poster: img.original_url,
                },
                file: {
                    name: img.name,
                    size: img.size,
                    type: img.mime_type,
                },
            }
        )
    } else {
        return
    }

    // console.log(img);
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


function imageDelete(error) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log(header);
    if (props.save) {
        var element = props.save[0]
    }

    emit('delete-file', [element, 'delete'])

    axios.delete(`${routedel.value}`, header)
        .then((reponse) => {
            console.log(reponse);
        })
        .catch(function (error) {
            console.log(error);
        })

    watcher()

}

</script>

<template>
    <div>

        <FilePond :name="name" ref="pond" credits="false" label-idle="Click to choose image, or drag here..."
            :server="db.server" @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
            @processfile="handleProcessedFile" @removefile="imageDelete" max-file-size="1MB" />
    </div>
</template>
