<script setup>
// const { onMounted }=require("@vue/runtime-core");

import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';

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
    m: Object
})

onMounted(() => {
    BreezeAuthenticatedLayout
    Head
    store
    FilePond

    console.log(props.m);

})

// const form = useForm({
//     name: '',
//     slug: '',
// });



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
                    <label for=""></label>
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
