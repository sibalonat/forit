<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';
// console.log('has mounted');
const prop = defineProps({
    tours: Object
})

const remove = () => {
    console.log('it removes')
}

onMounted(() => {
    console.log(prop.tours.length);
    remove
})
</script>
<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Tour Create
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <a :href="route('tour.create')" class="bg-slate-900 text-white absolute top-4 right-32 px-4 py-2 rounded-lg">Create one</a>
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg flex space-x-11 justify-center py-40">
                    <ul class="list-none flex-1 px-8" v-if="prop.tours.length">
                        <!-- {{ prop.tours.length }} -->
                        <li v-for="tour in tours" :key="tour.id" class="border-b-2">
                        <div class="grid grid-cols-5">
                            <p class="col-span-3 text-lg">{{ tour.title }}</p>
                            <div class="grid grid-cols-2">
                                <a class=" bg-slate-900 text-white px-4 text-center" :href="route('tour.edit', tour.slug)">Edit</a>
                                <button @click="remove">delete</button>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <p v-else>No tours yet</p>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>

</template>
