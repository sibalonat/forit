<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { computed, onMounted, reactive, ref } from '@vue/runtime-core';
// import route from 'vendor/tightenco/ziggy/src/js';

let creatingFolder = ref(false)

// Link
const prop = defineProps({
    objects: Object,
    ancestors: Array,
    project: Object,
})

let acen = reactive(prop.objects)

const form = useForm({
    name: ''
})


const getName = computed({
  get() {
    console.log(acen);
    return acen
  },
  set(val) {
    acen = val
  }
})


const submitForm = () => {
    let data = getName.value
    form.post(route('folder.store', {project: prop.project.id, uuid: data.uuid}))
}

onMounted(() => {
    BreezeAuthenticatedLayout, Head, Link
    creatingFolder
    // methods
    submitForm
})

</script>

<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Project Show
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="relative overflow-visible bg-white shadow-sm sm:rounded-lg">
                    <div class="flex w-full pt-4">
                        <ul class="w-4/5 mx-auto list-none list-outside">
                            <li v-for="ancestor in prop.ancestors" class="inline-block w-32 text-center"
                                :key="ancestor.id">
                                <Link :href="route('project.show', { project: prop.project.id, uuid: ancestor.uuid })"
                                @click="getName = ancestor">
                                    {{ ancestor.objectable.name }}
                                </Link>
                            </li>
                        </ul>
                        <div class="w-1/5">
                            <button type="button" class="px-3 py-1 text-black rounded-md bg-slate-400"
                                @click="creatingFolder = true"> New Folder </button>
                        </div>
                    </div>
                    <div class="flex w-full mt-8 ">
                        <table class="w-full table-fixed">
                            <thead class=" bg-slate-500 text-slate-300">
                                <tr>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <div v-if="creatingFolder">
                                    <tr class="border-b-2 bg-slate-500">
                                        <td class="p-3">
                                            <form class="flex items-center" @submit.prevent="submitForm">
                                                <input type="text" id="nameFolder"
                                                    v-model="form.name"
                                                    class="w-full h-10 px-3 mr-2 border-2 border-gray-200 rounded-lg">
                                                <button type="submit"
                                                    class="h-10 px-3 mr-2 bg-blue-700 rounded-md text-slate-300">
                                                    Save
                                                </button>
                                                <button type="button"
                                                    class="h-10 px-3 mr-2 bg-gray-500 rounded-md text-slate-300"
                                                    @click="creatingFolder = false">
                                                    Cancel
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                </div>
                                <tr v-for="child in prop.objects.children" :key="child.id">
                                    <td>{{ child.objectable.name }}</td>
                                    <td>-</td>
                                    <td class="grid grid-cols-2">
                                        <button>rename</button>
                                        <button>delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
