<script setup>
// const { onMounted }=require("@vue/runtime-core");

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';




onMounted(() => {
    BreezeAuthenticatedLayout
    Head
    store

})

const form = useForm({
    name: '',
    slug: '',
});

// useForm


const store = () => {

    console.log('whats up!');

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
