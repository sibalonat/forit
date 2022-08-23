<script setup>

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, reactive, ref, watch } from '@vue/runtime-core';


import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup } from "@vue-leaflet/vue-leaflet";

// selectStatus: String,
// img: Object,
// img: Object,
// points: Object,

const props = defineProps({
    m: Object,
})

// let idToDelete = ref('')
// let routedel = ref('')
// let pond = ref(null)
// let img = reactive({})

let url = ref(props.m.media[0].original_url)
// let bounds = ref([[-326.5, -326], [1223, 1223]])
let bounds = ref([[-326, -326], [326, 326]])
let zoom = ref(2)
let statement = ref(false)

// form
let name = ref('')
let notes = ref('')
let longitude = ref('')
let latitude = ref('')

const ob = reactive({
    name: '',
    notes: '',
    longitude: '126',
    latitude: '126',
})

// reactive

console.log(url.value);


onMounted(() => {
    //components
    BreezeAuthenticatedLayout, Head
    // functions
    store, updateValues, deleteValues, infodrag
    // leaflet
    LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup
    // attributes
    bounds, zoom, statement
    //form attributes
    name, notes, longitude, latitude

    //map object
    console.log(props.m);

})


watch(zoom, async (zoomed) => {

    console.log(zoomed);

})
watch(props.m, async (fresh) => {

    console.log(fresh);

})


const store = () => {
    if (ob.name.length === 0) {
        axios.post(route('markers.store', { mapview: props.m.id }), ob)
            .then(function (response) {
                console.log(response);
                ob.name = ''
                ob.notes = ''
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {

    }
}

const updateValues = () => {
    if (ob.name.length === 0) {

        console.log('is empty');

    }
}

const deleteValues = (el) => {
    console.log(el);
}



const infodrag = () => {
    // log('move')
    console.log('move');
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
                <div class="overflow-visible relative bg-white shadow-sm sm:rounded-lg">

                    <!-- <l-map v-model="zoom" v-model:zoom="zoom" :center="[47.41322, -1.219482]" @move="infodrag" -->
                    <l-map v-model="zoom" v-model:zoom="zoom" :center="[17.41322, -1.219482]" @move="infodrag"
                        style="height:100vh">
                        <l-image-overlay :url="url" :bounds="bounds" />

                        <!-- {{ m.markers }} -->
                        <l-marker v-for="marker in m.markers" :key="marker.id" :lat-lng="marker">
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
                                <textarea id="notes" name="notes" cols="21" rows="6" v-model="ob.notes"></textarea>
                                <!-- <input type="text" id="name" class="h-8" v-model="notes"> -->
                                <br>
                                <label for="latitude">latitude</label>
                                <input type="text" id="latitude" class="h-8" v-model="ob.longitude">
                                <br>
                                <label for="longitute">longitute</label>
                                <input type="text" id="longitute" class="h-8" v-model="ob.latitude">
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
                                <div class="grid grid-cols-2" v-for="mark in m.markers" :key="mark.id">
                                    <p class=" text-lg self-center">{{ mark.name }}</p>
                                    <div class="flex flex-col">
                                        <button class=" bg-teal-500 text-slate-900 rounded-md py-0 px-1 grow mb-1"
                                            @click="updateValues"> Edit </button>
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
