<script setup>

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, reactive, ref, watch, watchEffect } from '@vue/runtime-core';


import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup } from "@vue-leaflet/vue-leaflet";
import axios from 'axios';


const props = defineProps({
    m: Object,
})

// let idToDelete = ref('')
// let routedel = ref('')
// let pond = ref(null)
// let img = reactive({})

let data = ref([])

let url = ref(props.m.media[0].original_url)

let bounds = ref([[-326, -326], [326, 326]])
let zoom = ref(2)
let statement = ref(false)
let drag = ref(true)

// form
let intentifier = ref(null)


const ob = reactive({
    name: '',
    notes: '',
    lng: 0,
    lat: 0,
})



onMounted(() => {
    //components
    BreezeAuthenticatedLayout, Head
    // functions
    store, updateValues, deleteValues, infodrag, thingOnUpdate, markers()
    // leaflet
    LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup
    // attributes
    bounds, zoom, statement, data, drag, url
    //form attributes
    ob
})



watch(intentifier, async (id) => console.log(id))


watchEffect(() => console.log(ob))
watchEffect(() => console.log(ob.name))
watchEffect(() => console.log(data.value))

const markers = () => {
    axios.get(route('markers.all', { mapview: props.m.id }))
        .then((response) => {
            console.log(response);
            data.value = response.data
        })
}


const store = () => {
    // console.log(props.m.markers.includes(ob.name));
    if (data.value.some(item => item.name === ob.name) === false) {

        axios.post(route('markers.store', { mapview: props.m.id }), ob)
            .then(function (response) {
                console.log(response);
                ob.name = ''
                ob.notes = ''
                ob.lng = ''
                ob.lat = ''

                statement.value = false

                markers()

            })
            .catch(function (error) {
                console.log(error);
            });
    } else if (data.value.some(item => item.name === ob.name) === true) {

        axios.put(route('markers.up', { marker: intentifier.value }), ob)
            .then(function (response) {
                console.log(response);
                ob.name = ''
                ob.notes = ''
                ob.lng = ''
                ob.lat = ''

                statement.value = false

                markers()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const updateValues = (el) => {
    if (ob.name.length === 0) {
        axios.get(route('marker.single', { marker: parseInt(el) }))
            .then(function (response) {
                console.log(response);
                ob.name = response.data.name
                ob.notes = response.data.notes

                intentifier.value = el

                statement.value = true


            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const deleteValues = (el) => {
    axios.delete(route('markers.del', { marker: parseInt(el) }))
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


                        <l-marker v-for="marker in data" :key="marker.id"
                            @update:lat-lng="thingOnUpdate($event)" :lat-lng="marker" :draggable="statement">
                            <l-popup :content="marker.name" />
                        </l-marker>
                    </l-map>
                    <div class="absolute top-0 -left-64 z-50">

                        <button type="button" class=" bg-slate-800 text-white p-1 rounded-lg"
                            :class="statement ? 'opacity-0' : ''" @click="statement = !statement">Create
                            Marker</button>
                    </div>

                    <div ref="bool"
                        class="absolute top-0 -left-64 h-full min-h-0 overflow-y-auto inset-y-0 z-0 bg-white"
                        :class="statement ? 'w-64 opacity-100 transition-width transition-slowest ease' : 'w-0 opacity-0 transition-width transition-slowest ease'">
                        <div class="flex justify-end items-center h-20">
                            <button class="rounded-full bg-black text-white px-3" @click="statement = !statement"> X
                            </button>
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
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
