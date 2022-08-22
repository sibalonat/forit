<script setup>
// const { onMounted }=require("@vue/runtime-core");

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, onUpdated, watch, watchEffect } from '@vue/runtime-core';

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


const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster
);

const props = defineProps({
    m: Object,
    img: Object,
    selectStatus: Array,
})


let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})

let idToDelete = ref('')
let routedel = ref('')
let pond = ref(null)
const name = ref('mapView')

let serverMessage = {};
let db = reactive({
    server: {
        url: route('markers.edit', props.m.id),
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
    BreezeAuthenticatedLayout
    Head
    store
    FilePond
    form
    db
    name
    pond.value

    filepondInitialized
    handleProcessedFile
    imageDelete

    console.log(props.selectStatus);
    console.log(props.img);


})

// console.log(db);

const form = useForm({
    name: '',
});

// onUpdated(() => {

//     console.log(db);

// })

const watcher = watchEffect(() => {
    if (props.img) {
        let element = props.img
        console.log('exists');
        console.log(props.save);
        routedel.value = route('image.delete', { form: props.formId, id: element.id })
    }

    console.log(routedel.value);
})

// watchEffect



// useForm

watch(idToDelete, async (newId) => {
    idToDelete.value = newId

    console.log(idToDelete.value);


    routedel.value = route('markers.mediadel', { mapview: props.m.id, id: idToDelete.value })
    console.log(idToDelete.value);
})

// watch


const store = () => {

    console.log('whats up!');
    form.post(route('category.store'));

}


async function filepondInitialized() {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);

    if (props.save) {
        // let element = props.save[0]

        await axios.get(route('markers.mediashow', { mapview: props.m.id }), header)
            .then((response) => {
                // console.log(response);
                // image = response.data
                img = response.data
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

    console.log(idToDelete.value);

    // emit('change-file', obj)

    // console.log(emit);
    // console.log(idToDelete);

    // // let prs = JSON.parse(obj);
    // console.log(images.value);


    // if (Array.isArray(images.value)) {
    //     images.value.unshift(obj);
    // }
}


function imageDelete(error) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log(header);
    // if (props.save) {
    //     var element = props.save[0]
    // }

    // emit('delete-file', [element, 'delete'])

    axios.delete(`${routedel.value}`, header)
        .then((reponse) => {
            console.log(reponse);
        })
        .catch(function (error) {
            console.log(error);
        })
    watcher()

}




//  onMounted

</script>

<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Marker Create
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <form @submit.prevent="store" enctype="multipart/form-data">
                        <div class="grid grid-cols-2 gap-x-10">
                            <div class="grid grid-flow-row">
                                <label for="textname">Name</label>
                                <input type="text" class="border-y-8 border-cyan-800" v-model="form.name">
                            </div>
                            <div>
                                <FilePond :name="name" ref="pond" credits="false"
                                    label-idle="Click to choose image, or drag here..." :server="db.server"
                                    @init="filepondInitialized" accepted-file-types="image/jpg, image/jpeg, image/png"
                                    @processfile="handleProcessedFile" @removefile="imageDelete" max-file-size="1MB" />

                            </div>
                        </div>
                        <!-- <div class="p-6 bg-white border-b border-gray-200" v-if="elements.length"> -->

                        <div class="grid grid-cols-1">
                            <button type="submit" class="w-20 text-white bg-gray-800">Add Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
