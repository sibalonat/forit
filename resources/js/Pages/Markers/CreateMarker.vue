<script setup>

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { onMounted, reactive, ref, watch, watchEffect } from '@vue/runtime-core';


import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup } from "@vue-leaflet/vue-leaflet";
import axios from 'axios';

import vueFilePond, { setOptions } from 'vue-filepond';
// import vueFilePond, { setOptions } from 'vue-filepond';
import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// lodash
import _ from 'lodash';


// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster
);




const props = defineProps({
    m: Object,
})

let name = ref('markersArr')

let idToDelete = ref('')
let intentifier = ref(null)
let routedel = ref('')
let pond = ref(null)
// let img = []
let imgs = ref(null)
// let img = reactive([])


let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})


let data = ref([])

let url = ref(props.m.media[0].original_url)

let bounds = ref([[-326, -326], [326, 326]])
let zoom = ref(2)
let statement = ref(false)
let stateimg = ref(false)
// let idMarker = ref(null)
let drag = ref(false)
// let apimarker = ref(false)

// form



const ob = reactive({
    name: '',
    notes: '',
    lng: 0,
    lat: 0,
})



onMounted(() => {
    //components
    BreezeAuthenticatedLayout, Head, FilePond
    // functions
    store, updateValues, deleteValues, infodrag, thingOnUpdate, markers()
    filepondInitialized, handleProcessedFile, imageDelete, closes, updateStarts, errorCatched
    // leaflet
    LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup
    // attributes
    bounds, zoom, statement, data, drag, url, pond, idToDelete, routedel, name, imgs
    //form attributes
    ob
})






const markers = () => {
    axios.get(route('markers.all', { mapview: props.m.id }), header)
        .then((response) => {
            console.log(response);
            data.value = response.data
        })
}


async function filepondInitialized() {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);

    console.log(pond.value.getFiles());

}

function handleProcessedFile(error, file) {
    if (error) {
        console.error(error);
        return;
    }

    // console.log(file.serverId);

    // let obj = file.serverId
    // let obj = JSON.parse(file.serverId)
    let obj = JSON.parse(file.serverId)

    // console.log(obj);

    // // this.idToDelete = obj.id

    let img = {
        source: obj,
        options: {
            type: 'local',
            metadata: {
                poster: obj.original_url,
            },
            file: {
                name: obj.name,
                size: obj.size,
                type: obj.mime_type
            }
        }
    }
    // markers()


    imgs.value.unshift(img)

    // idToDelete.value = obj.id

    // console.log(idToDelete.value);
}

const updateStarts = () => {
    console.log('this now');
}

const errorCatched = (error) => {
    console.log(error);
}





const store = () => {
    // console.log(props.m.markers.includes(ob.name));
    if (data.value.some(item => item.name === ob.name) === false) {

        axios.post(route('markers.store', { mapview: props.m.id }), ob, header)
            .then(function (response) {
                console.log(response);
                ob.name = ''
                ob.notes = ''
                ob.lng = ''
                ob.lat = ''

                drag.value = false
                stateimg.value = false

                markers()

            })
            .catch(function (error) {
                console.log(error);
            });
    } else if (data.value.some(item => item.name === ob.name) === true) {

        axios.put(route('markers.up', { marker: intentifier.value }), ob, header)
            .then(function (response) {
                console.log(response);
                ob.name = ''
                ob.notes = ''
                ob.lng = ''
                ob.lat = ''

                drag.value = false
                stateimg.value = false

                markers()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const updateValues = (el) => {
    if (data.value.some(item => item.name === ob.name) === true || ob.name.length === 0) {
        axios.get(route('marker.single', { marker: parseInt(el) }), header)
            .then(function (response) {
                console.log(response);
                ob.name = response.data.name
                ob.notes = response.data.notes

                intentifier.value = el

                drag.value = true
                stateimg.value = true


                axios.get(route('markers.imgsget', { marker: intentifier.value }), header)
                    .then((response) => {
                        console.log(response);
                        imgs.value = []

                        if (!_.isEmpty(response.data)) {
                            console.log('ka dicka');
                            imgs.value = response.data.map((item) => {

                                let single = {
                                    source: item,
                                    options: {
                                        type: 'local',
                                        metadata: {
                                            poster: item.original_url,
                                        },
                                        file: {
                                            name: item.name,
                                            size: item.size,
                                            type: item.mime_type
                                        }
                                    }
                                }
                                return single
                            })

                            setOptions({ files: imgs.value })
                        } else {
                            setOptions({ files: [] })
                        }


                    })
                    .catch((error) => {
                        console.log('and this');
                        console.log(error);
                    })

                setOptions({
                    // onInit: console.log('init'),
                    server: {
                        url: route('marker.single', intentifier.value),
                        process: {
                            url: '/image',
                            // url: route('marker.single', intentifier.value),
                            onerror: (response) => {
                                serverMessage = JSON.parse(response);
                            },
                        },
                        revert: null,
                        load: null,
                        headers: {
                            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
                        }
                    },

                    labelFileProcessingError: () => {
                        return serverMessage.error;
                    }
                });
            })

            .catch(function (error) {
                console.log(error);
            });
    }
}

const deleteValues = (el) => {
    axios.delete(route('markers.del', { marker: parseInt(el) }), header)
        .then(function (response) {
            console.log(response);
            markers()
        })
        .catch(function (error) {
            console.log(error);
        });
}


const thingOnUpdate = (el) => {
    console.log('ready');

    ob.lng = parseFloat(el.lng)
    ob.lat = parseFloat(el.lat)
}



const infodrag = (el) => {
    console.log('move');
}

const closes = () => {
    if (statement.value === false) {
        statement.value = !statement.value
    } else if (statement.value === true && stateimg.value === true) {
        statement.value = !statement.value
        stateimg.value = !stateimg.value
    } else {
        statement.value = !statement.value
    }
}

async function imageDelete(error, file) {
    if (error) {
        console.error(error);
        return;
    }


    let namePerPick = file.file.name


    var obj = imgs.value.find((o) => o.source.file_name === namePerPick)


    // @addfile.once="markMainImage"

    if (file.serverId) {
        axios.delete(route('markers.imgdel', { marker: await file.serverId.model_id, id: await file.serverId.id }), header)
            .then((reponse) => {
                // imgs.value
                console.log(imgs.value.length);
                console.log(reponse);
            })
            .catch(function (error) {
                console.log(error);
            })
    } else {

        axios.delete(route('markers.imgdel', { marker: await obj.source.model_id, id: await obj.source.id }), header)
            .then((reponse) => {
                // imgs.value
                console.log(imgs.value.length);
                console.log(reponse);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    console.log(imgs.value);

}



watch(intentifier, async (id) => console.log(id))
// watch(imgs, async (i) => {
//     console.log(i);
// }, { deep: true })

watch(imgs, async (i) => {
    console.log(i);
    pond.value.getFiles()
    console.log(pond.value.getFiles())
}, { deep: true })

// watch(img, async (i) => {
//     console.log(i);
// }, { deep: true })


watch(idToDelete, async (newId) => {
    idToDelete.value = newId


    routedel.value = route('markers.imgdel', { marker: intentifier.value, id: idToDelete.value })
    console.log(idToDelete.value);
})

// watchEffect(() => {
//     // console.log(img);
//     if (imgs.value) {
//         let element = imgs.value
//         console.log(element);
//         element.forEach(el => {
//             routedel.value = route('markers.imgdel', { marker: el.source.model_id, id: el.source.id })
//         });
//         console.log('exists');
//         // console.log(props.save);
//     } else {
//         return
//     }

//     console.log(routedel.value);
// })


watchEffect(() => {
    console.log(imgs.value)
    // pond.value.getFiles()
    // console.log(pond.value.getFiles())

})
watchEffect(() => console.log(ob))
// watchEffect(() => console.log(img))
watchEffect(() => console.log(ob.name))
watchEffect(() => console.log(data.value))

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
                <div class="overflow-visible relative bg-white shadow-sm sm:rounded-lg">

                    <l-map v-model="zoom" v-model:zoom="zoom" :center="[17.41322, -1.219482]" @move="infodrag"
                        style="height:100vh">
                        <l-image-overlay :url="url" :bounds="bounds" />


                        <l-marker v-for="marker in data" :key="marker.id" @update:lat-lng="thingOnUpdate($event)"
                            :lat-lng="marker" :draggable="drag">
                            <l-popup :content="marker.name" />
                        </l-marker>
                    </l-map>
                    <div class="absolute top-0 -left-64 z-50">

                        <button type="button" class=" bg-slate-800 text-white p-1 rounded-lg"
                            :class="statement ? 'opacity-0' : ''" @click="closes">Create
                            Marker</button>
                    </div>

                    <div ref="bool"
                        class="absolute top-0 -left-64 h-full min-h-0 overflow-y-auto inset-y-0 z-0 bg-white"
                        :class="statement ? 'w-64 opacity-100 transition-width transition-slowest ease' : 'w-0 opacity-0 transition-width transition-slowest ease-in-out delay-150'">
                        <div class="flex justify-end items-center h-20">
                            <button class="rounded-full bg-black text-white px-3" @click="closes"> X
                            </button>
                            <!-- <button class="rounded-full bg-black text-white px-3" @click="statement = !statement"> X
                            </button> -->
                        </div>
                        <div class="flex flex-col">
                            <div class="grow px-4">
                                <label for="name">name</label>
                                <input type="text" class=" h-8" id="name" v-model="ob.name">
                                <br>
                                <label for="notes">notes</label>
                                <textarea id="notes" name="notes" rows="6" v-model="ob.notes"></textarea>
                                <br>
                                <br>
                                <button class=" bg-slate-900 text-neutral-400 rounded-md py-1 px-2 " @click="store">
                                    Store Marker</button>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="flex flex-col grow overflow-y-auto min-h-0">
                            <div class="px-4">
                                <!-- <p class=" text-lg ">kjo</p> -->
                                <div class="grid grid-cols-2 mb-2" v-for="mark in data" :key="mark.id">
                                    <p class=" text-lg self-center">{{ mark.name }}</p>
                                    <div class="flex flex-col">
                                        <button class=" bg-teal-500 text-slate-900 rounded-md py-0 px-1 grow mb-1"
                                            @click="updateValues(mark.id)"> Edit </button>
                                        <button class=" bg-red-600 text-slate-900 rounded-md py-0 px-1 grow"
                                            @click="deleteValues(mark.id)"> Delete </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute top-0 -right-72 h-full min-h-0 overflow-y-auto inset-y-0 z-0 bg-white"
                        :class="stateimg ? 'w-72 opacity-100 transition-width transition-slowest ease' : 'w-0 opacity-0 transition-width transition-slowest ease-in-out delay-150'">
                        <div class="flex flex-col">
                            <div class="grow px-4">
                                <br>
                                <br>

                                <FilePond :name="name" ref="pond" allowMultiple="true" credits="false"
                                    label-idle="Click to choose image, or drag here..." @init="filepondInitialized"
                                    accepted-file-types="image/jpg, image/jpeg, image/png" @updatefiles="updateStarts"
                                    @error="errorCatched" @processfile="handleProcessedFile" @removefile="imageDelete"
                                    max-file-size="5MB" />
                                <br>
                                <br>
                            </div>
                        </div>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
