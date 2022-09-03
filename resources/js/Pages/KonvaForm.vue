<script setup>
import { onMounted, reactive, ref, watchEffect, provide } from 'vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

import JustIt from "./FormTemplate/JustIt.vue";

const props = defineProps({
    f: Object
})

const form = useForm({
    form_builder_json: []
});

let elements = ref([])

let colNum = ref(6)
let index = ref(null)

let classes = ref(null)

let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})


const removeItem = (e) => {
    console.log(e);
}

const addItem = () => {
    elements.value.push({
        x: (elements.value.length * 2) % (colNum.value || 6),
        y: elements.value.length + (colNum.value || 6),
        w: 2,
        h: 2,
        i: index.value,
        stateitem: false,
        field: null
    })

    classes.value = 'overflow-y-auto'
    setTimeout(() => {
        classes.value = null
    })

    index.value++
}

const layoutchanges = (e) => {
    // console.log(e);
}

const container = (e) => {
    // console.log(e);
}

onMounted(() => {
    Head
    BreezeAuthenticatedLayout, JustIt, colNum, elements
    //cors
    header
    //form
    form

    // methods

    removeItem, addItem, layoutchanges, container

    elements.value.push({ x: 0, y: 0, w: 2, h: 2, i: 0, stateitem: false, field: null })

    index.value = elements.value.length
})


watchEffect(() => {
    console.log(index.value)
    console.log(elements.value)
})

provide('elements', elements.value)

provide('colNum', colNum.value)
provide('formId', props.f.id)

// provide('stateitem', stateitem)

</script>


<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="w-full mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="grid grid-cols-7">
                        <div class="col-span-5">
                            <button type="button"
                                class="p-2 text-base text-center rounded-sm bg-neutral-500 text-slate-900 text-ellipsis"
                                @click="addItem">Add an item dynamically</button>
                            <br><br>
                            <div class="w-full h-full">
                                <just-it :classes="classes" @contain="container" @layout-changed="layoutchanges" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>

</template>



