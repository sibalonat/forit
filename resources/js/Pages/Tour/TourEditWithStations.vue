<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-vue3';
import { onBeforeMount, onMounted, reactive, ref, watchEffect } from '@vue/runtime-core';
import ModalStationVue from './ModalStation.vue';


import { LMap, LTileLayer, LMarker, LPopup, LCircleMarker } from '@vue-leaflet/vue-leaflet'

import "leaflet/dist/leaflet.css"


// filepond
import vueFilePond, { setOptions } from 'vue-filepond';

import "filepond/dist/filepond.min.css";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Import the plugin styles
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Inertia } from '@inertiajs/inertia';

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFilePoster
);



const prop = defineProps({
    tour: Object,
})



let url = ref('https://{s}.tile.osm.org/{z}/{x}/{y}.png')
// let attribution = ref('&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors')
let zoom = ref(12)
let zoomOuter = ref(11)
// let imgs = ref(null)
const name = ref('stationArr')
let center = ref([41.341291, 19.861367])
let centerOuter = reactive({ lng: 19.850004785156254, lat: 41.33198614680859 })
let geolocation = ref(null)
let geo = reactive({
    lng: '',
    lat: ''
})

let imgsADelete = ref(null)
let maped = ref(null)
let marker = ref(null)
let markerEdit = ref(null)
let changeview = ref(false)
let drag = ref(false)
let allTours = ref(null)
let updatedMarker = reactive({
    lng: 0,
    lat: 0,
})



let response = ref(null)
// let response = ref(null)

// filepond

let pond = ref(null)

let imgs = ref([])

let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})

let stations = ref(null)


const form = useForm({
    title: '',
    teaser: '',
    lng: '',
    lat: '',
    tour_id: prop.tour.id
});


const submitForm = () => {
    form.lat = updatedMarker.lat
    form.lng = updatedMarker.lng
    form.put(route('tour.stationupdate', { tour: prop.tour.slug, station: response.value.id }));
}

const errorCatched = (error) => {
    console.log(error);
}

const getImages = async (e, header) => {
    return await axios.get(route('station.imgsget', e), header);
}

const filepondInitialized = async () => {
    console.log('Filepond is ready!');
    console.log('Filepond object:', pond.value);

    console.log(pond.value.getFiles());


    if (usePage().props.value.modal !== undefined) {
        response.value = usePage().props.value.modal.props.stat;

        setOptions({ files: [] })

        imgsADelete.value = await getImages(response.value.id, header);

        if (imgsADelete.value.data.length) {

            imgs.value = imgsADelete.value.data.map((item) => {

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
        }
    }
}

const handleProcessedFile = (error, file) => {
    if (error) {
        console.error(error);
        return;
    }

    let obj = JSON.parse(file.serverId)


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

    imgs.value.unshift(img)
    setOptions({ files: imgs.value })

}

const beforeRemove = async (file) => {

    var rest = imgs.value.filter((value) => {
        return value.source.id !== file.source.id
    });

    if (file.serverId) {
        axios
        .delete(route('station.imgdel', {
            station: await response.value.id, id: await file.serverId.id
        }), header)
        .then((reponse) => {
            setOptions({ files: rest })
            // console.log(reponse);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

const onReady = async () => {
    const map = maped.value.leafletObject
    showBounds(map.getBounds())
}

const showBounds = (bounds) => {
    bounds.getNorthWest()
    bounds.getSouthEast()
}

const thingOnUpdate = (el) => {
    updatedMarker.lat = parseFloat(el.lat)
    updatedMarker.lng = parseFloat(el.lng)
}


const changingView = () => {
    changeview.value = !changeview.value
    marker.value = updatedMarker
}

const deleteStation = (s) => {
    axios.delete(route('station.delete', { station: s.id }), header)
        .then((reponse) => {
            console.log(reponse);
            Inertia.reload({ only: [] })
        })
        .catch(function (error) {
            console.log(error);
        })
    // Inertia.get(route('tour.edit', {tour: prop.tour.slug}));
}


onBeforeMount(() => {
    navigator.geolocation.getCurrentPosition(pos => {
        geolocation.value = pos.coords;
    })
    stations.value = prop.tour.stations
})

onMounted(() => {
    thingOnUpdate, filepondInitialized, handleProcessedFile
    LMap, LTileLayer, LMarker, LPopup
    marker.value = [41.32801218205472, 19.818165153265003]
    drag.value = true

    beforeRemove

    url, zoom, zoomOuter, name, center, centerOuter, allTours, FilePond

    submitForm, deleteStation, changingView, onReady, errorCatched

    // imageDelete
    if (geolocation.value) {
        geo.lat = geolocation.value.latitude
        geo.lng = geolocation.value.longitude
    }

    console.log();


    // maped.value.noBlockingAnimations = true

    if (!("geolocation" in navigator)) {
        errorStr.value = 'Geolocation is not available.';
        return;
    }

    // if (usePage().props.value.modal.props.stat) {


    if (usePage().props.value.modal !== undefined) {
        response.value = usePage().props.value.modal.props.stat;
        if (response.value.lat != 0) {
            console.log('say something');
            // console.log(form.teaser);
            form.teaser = response.value.teaser
            markerEdit.value = {lat: parseFloat(response.value.lat), lng: parseFloat(response.value.lng)}
            updatedMarker = markerEdit.value
            console.log(markerEdit.value);
        }
    }

    ModalStationVue


    if (response.value !== null) {
        setOptions({
            server: {
                url: route('single.station', response.value.id),
                process: {
                    url: '/image-store',
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

    }

})


watchEffect(async () => {
    console.log(response.value);
    console.log(geolocation.value);

    if (geolocation.value) {
        geo.lat = await geolocation.value.latitude
        geo.lng = await geolocation.value.longitude
    }

})


</script>
<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                {{ prop.tour.title }}
            </h2>
        </template>

        <div class="py-12">
            <div class="relative mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="flex justify-around w-full py-2 overflow-hidden bg-white shadow-sm sm:rounded-lg space-x-11">
                    <div class="grid w-full grid-cols-6 gap-x-2">
                        <div class="flex items-center justify-center py-5 my-auto bg-gray-500 h-5/6 drop-shadow-lg">
                            <div class="h-min">
                                <Link class="px-5 py-2 mx-auto text-yellow-300 uppercase rounded-md bg-amber-900"
                                    :href="route('tour.redirect', prop.tour.slug)">
                                CREATE STATION
                                </Link>
                            </div>
                        </div>
                        <div class="col-span-2 col-start-2">
                            <div class="flex flex-row" v-for="(station, i) in prop.tour.stations" :key="station.id">
                                <div class="grid grid-cols-8 py-2 grow gap-x-5">
                                    <p class="col-span-5 text-lg font-semibold">
                                        <span class="text-xs ">{{ i+1 }}.</span> {{ station.teaser }}
                                    </p>
                                    <div class="col-span-1">
                                        <Link
                                        type="button"
                                        class="px-2 py-1 mx-auto my-auto text-base rounded-lg bg-lime-800 text-slate-300 "
                                        :href="route('tour.stationmodal', {tour: prop.tour.slug, station: station.id})"> Edit</Link>
                                    </div>
                                    <div class="col-span-1">
                                        <Link type="button"
                                            class="px-2 py-1 mx-auto my-auto text-base bg-red-600 rounded-lg text-slate-900"
                                            @click="deleteStation(station)"> Delete</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="z-0 col-span-3 col-start-4">
                            <div class="flex h-full">
                                <l-map style="height:80vh" :center="centerOuter" v-model="zoomOuter"
                                    v-model:zoom="zoomOuter" :maxZoom="19">
                                    <l-tile-layer :url="url" />
                                    <l-circle-marker v-for="station in prop.tour.stations" :key="station.id"
                                        :lat-lng="[station.lat, station.lng]" :draggable="false" :radius="7"
                                        :fill="true" :fillColor="'blue'" :fillOpacity="1">
                                        <l-popup :content="station.teaser" />
                                    </l-circle-marker>
                                    <l-circle-marker :stroke="true" :radius="7" :weight="1" :dashArray="'4.5'"
                                        :fill="true" :fillColor="'red'" :fillOpacity="1" :color="'blue'" :lat-lng="geo">
                                    </l-circle-marker>
                                </l-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
    <!-- <ModalStationVue class="bg-neutral-500/[.6]" :tour="prop.tour" /> -->

    <ModalStationVue class="bg-neutral-500/[.6]" :tour="prop.tour">
        <template #title>
            <h3 class="text-2xl">Stacion artistik</h3>
        </template>
        <template #default>
            <form class="mt-6" @submit.prevent="submitForm">
                <div class="flex flex-wrap">
                    <div class="grid w-11/12 grid-cols-3 gap-x-2">
                        <div>
                            <label for="title" class="self-center px-8 py-1 text-white bg-black rounded-lg">Title</label>
                            {{ form.title }}
                            <input type="text" id="title" v-model="form.title">
                        </div>
                        <div class="col-span-2">
                            <label for="teaser" class="self-center px-8 py-1 text-white bg-black rounded-lg ">
                                Teaser
                            </label>
                            <textarea name="teaser" id="teaser" class="self-center w-full"
                                v-model="form.teaser"></textarea>
                        </div>

                    </div>
                    <br>

                    <div class="z-50 w-full h-full" v-if="!changeview">
                        <p class="py-2 pl-5 text-xs italic bg-slate-400 text-slate-200"> Ka nje marker. Marker, pika,
                            mund te tërhiqet dhe vendoset ku duhet</p>
                        <l-map style="height:50vh" ref="maped" :center="center" v-model="zoom" v-model:zoom="zoom"
                            :maxZoom="19" @ready="onReady" @update:bounds="showBounds">
                            <l-tile-layer :url="url" />
                            <l-marker @update:lat-lng="thingOnUpdate($event)" :lat-lng="markerEdit != null ? markerEdit : marker" :draggable="drag">
                                <!-- <l-popup :content="marker.name" /> -->
                            </l-marker>
                        </l-map>
                    </div>
                    <br>
                    <div class="w-full h-full" v-if="changeview">
                        <!-- @updatefiles="updateStarts"  -->
                        <!-- @error="errorCatched" -->
                        <!-- @removefile="imageDelete" -->
                        <FilePond :name="name" ref="pond" allowMultiple="true" credits="false"
                            label-idle="Click to choose image, or drag here..." @init="filepondInitialized" :beforeRemoveFile="beforeRemove"
                            accepted-file-types="image/jpg, image/jpeg, image/png, video/mp4, audio/mp3"
                            @processfile="handleProcessedFile"  max-file-size="55MB" />

                    </div>

                </div>
                <div class="grid grid-cols-2">
                    <button type="button" class="text-xl text-white bg-slate-900" @click="changingView()">Prev</button>
                    <button type="button" class="text-xl text-white bg-slate-900" @click="changingView()"
                        :disabled="updatedMarker.lat === 0">Next</button>
                </div>
                <button type="submit" class="px-6 py-1 mt-12 bg-green-700 rounded-lg text-slate-100">
                    Ruje stacionin
                </button>
            </form>

        </template>

    </ModalStationVue>


</template>

<style>
.filepond--item {
    width: calc(50% - 0.5em);
}
</style>
