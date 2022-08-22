<script setup>

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted, ref } from '@vue/runtime-core';


import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup } from "@vue-leaflet/vue-leaflet";

// selectStatus: String,
// img: Object,
const props = defineProps({
    m: Object,
    points: Object,
})

// let idToDelete = ref('')
// let routedel = ref('')
// let pond = ref(null)
// let img = reactive({})

let url = ref(props.m.media[0].original_url)
// let bounds = ref([[-326.5, -326], [1223, 1223]])
let bounds = ref([[-326, -326], [326, 326]])
let zoom = ref(2)

console.log(url.value);


onMounted(() => {
    //components
    BreezeAuthenticatedLayout, Head
    // functions
    store
    // leaflet
    LMap, LGeoJson, LImageOverlay, LMarker, LPolyline, LPopup
    // attributes
    bounds, zoom
    // console.log(LMap);

    console.log(props.m);
    // console.log(props.img);
    console.log(props.m.status);
    console.log(props.points);

})

// const form = useForm({
//     name: '',
//     slug: '',
// });

// useForm


const store = () => {

    console.log('whats up!');

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
            <div class="mx-auto max-w-full sm:px-6 lg:px-8">
                <div class="overflow-visible bg-white shadow-sm sm:rounded-lg">

                    <!-- <l-map v-model="zoom" v-model:zoom="zoom" :center="[47.41322, -1.219482]" @move="infodrag" -->
                    <l-map v-model="zoom" v-model:zoom="zoom" :center="[17.41322, -1.219482]" @move="infodrag"
                        style="height:100vh">
                        <l-image-overlay :url="url" :bounds="bounds" />

                        {{ m.markers }}
                        <l-marker v-for="marker in m.markers" :key="marker.id" :lat-lng="marker">
                            <l-popup :content="marker.name" />
                        </l-marker>
                    </l-map>

                    <!-- <div class="container relative z-50 bg-white mx-auto w-3/5">
                        <img :src="url" class="absolute inset-8 object-fill w-full" alt="">
                    </div> -->
                    <!-- <div class="w-full relative bg-cover" :style="{ backgroundImage: 'url('+ props.img.original_url +')' }"> -->

                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
