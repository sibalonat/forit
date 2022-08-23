<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';

const props = defineProps({
    maps: Object,
    // img: Object,
    // points: Object,
})


// defineProps

onMounted(() => {
    BreezeAuthenticatedLayout
    Head

    console.log(props.maps);
})
// onMounted

</script>

<template>

    <Head title="Markers" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Markers
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg flex justify-center py-4">
                    <a class="bg-gray-800 text-lg text-gray-200 rounded-lg p-4" :href="route('markers.create')">Create
                        Marker</a>
                </div>
                <div class="grid grid-cols-2 shadow-sm bg-white sm:rounded-lg justify-center py-12 px-10"
                    v-for="(map, i) in props.maps" :key="map.id">
                    <div class="flex">
                        <span class=" text-start text-lg pr-12 "> {{ i }}</span>
                        <p class=" text-start text-lg "> {{ map.name }}</p>
                    </div>
                    <div class="content-center flex">
                        <a class="mx-auto bg-orange-300 text-black px-3 rounded-md py-1 " :href="route('markers.show', map.id )">View Map</a>
                    </div>

                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

