<script setup>
import { onMounted, reactive, ref, watchEffect, provide } from 'vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';


import Input from "./../Components/fields/Input.vue";
import Textarea from "./../Components/fields/Textarea.vue";
import FileUpload from "./../Components/fields/FileUpload.vue";
import Select from "./../Components/fields/Select.vue";
import SignaturePad from "./../Components/fields/SignaturePad.vue";
import VDatepicker from "./../Components/fields/VDatepicker.vue";
import JustIt from "./FormTemplate/JustIt.vue";

const props = defineProps({
    f: Object
})

const form = useForm({
    form_builder_json: []
});

let elements = ref([])

let colNum = ref(10)
let index = ref(null)

let classes = ref(null)

const fieldlist = ref(
    [

        {
            name: 'TextInput',
            text: 'Text',
            alias: 'Text',
            hasOptions: false,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: true,
        },
        {
            name: 'TextArea',
            text: 'Text Area',
            alias: 'Textarea',
            hasOptions: false,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: false,
        },
        {
            name: 'SignaturePad',
            text: 'Signature',
            alias: 'Signature',
            hasOptions: false,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: false,
        },
        {
            name: 'SelectList',
            text: 'Select',
            alias: 'Select List',
            hasOptions: true,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: false,

        },
        {
            name: 'FileUpload',
            text: 'fileUpload',
            alias: 'File Upload',
            hasOptions: false,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: false,
        },
        {
            name: 'DatetimePicker',
            text: 'Date-Time Picker',
            alias: 'Date-Time',
            hasOptions: false,
            isRequired: false,
            isHelpBlockVisible: false,
            isPlaceholderVisible: false,
        },

    ]
)

let header = reactive({
    headers: { 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content }
})


const removeItem = (e) => {
    console.log(e);
}

const addItem = () => {
    elements.value.push({
        x: (elements.value.length * 2) % (colNum.value || 10),
        y: elements.value.length + (colNum.value || 10),
        w: 2,
        h: 2,
        i: index.value,
        stateitem: false
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
    BreezeAuthenticatedLayout, Input, Textarea, FileUpload, Select, SignaturePad, VDatepicker, JustIt, colNum, elements
    //cors
    header
    //form
    form, fieldlist

    // methods

    removeItem, addItem, layoutchanges, container

    elements.value.push({ x: 0, y: 0, w: 2, h: 2, i: 0, stateitem: false })

    index.value = elements.value.length
})


watchEffect(() => {
    console.log(index.value)
    console.log(elements.value)
})

provide('elements', elements.value)

provide('colNum', colNum.value)

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



