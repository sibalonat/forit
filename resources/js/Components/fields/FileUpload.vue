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
// const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize, FilePondPluginImagePreview);


const props = defineProps({
    name: String,
    formId: Number
})

const emit = defineEmits(['change'])


let idToDelete = ref('')
let pond = ref(null)
let routedel = ref('')
let images = ref([])


onMounted(() => {
    pond.value
    // console.log(pond.value);
    filepondInitialized
    handleProcessedFile
    imageDelete
    FilePond
})

watch(idToDelete, async (newId) => {
    idToDelete.value = newId
    routedel.value = route('image.delete', { form: props.formId, id: idToDelete.value })
    console.log(routedel.value);
})


let serverMessage = {};
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





function filepondInitialized() {
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

    emit('change', obj)
    // console.log(idToDelete);

    // // let prs = JSON.parse(obj);
    // console.log(images.value);


    if (Array.isArray(images.value)) {
        images.value.unshift(obj);
    }
}

function imageDelete(error, file) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log();

    axios.delete(`${routedel.value}`, {
        headers: {
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
        },
    }).catch(function (error) {
        console.log(error);
    })


    // console.log(file);

}

</script>


<template>
    <div>
        <!-- :server="{url}" -->
        <FilePond :name="name" ref="pond" credits="false" label-idle="Click to choose image, or drag here..."
            @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
            @processfile="handleProcessedFile" @removefile="imageDelete" max-file-size="1MB" />
    </div>
</template>
