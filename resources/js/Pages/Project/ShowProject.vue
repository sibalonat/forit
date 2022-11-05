<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { computed, onMounted, reactive, ref, watch  } from '@vue/runtime-core';


// Link
const prop = defineProps({
    objects: Object,
    ancestors: Array,
    project: Object,
})

let creatingFolder = ref(false)
let acen = reactive(prop.objects)
let rename = ref(null)

const form = useForm({
    name: ''
})


const getName = computed({
  get() {
    return acen
  },
  set(val) {
    acen = val
  }
})

const getIdForRename = computed({
  get() {
    return rename.value
  },
  set(val) {
    rename.value = val
  }
})

const renameValue = (n) => {
    form.name = n
}


const submitForm = () => {
    let data = getName.value
    form.post(route('folder.store', {project: prop.project.id, uuid: data.uuid}))
    creatingFolder.value = false
    form.name = ''
}

const updateForm = () => {
    let data = getName.value

    form.put(route('folder.update', {project: prop.project.id, uuid: data.uuid, id: getIdForRename.value}))
    getIdForRename.value = null
    form.name = ''
}

const deleteForm = (n) => {
    getIdForRename.value = n;
    form.delete(route('folder.delete', {project: prop.project.id, id: getIdForRename.value}))
    getIdForRename.value = null
}

onMounted(() => {
    BreezeAuthenticatedLayout, Head, Link
    creatingFolder, getIdForRename, getName
    // methods
    submitForm, renameValue, updateForm, deleteForm
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
                                    <td>
                                        <div v-if="rename === child.id">
                                            <form class="flex items-center flex-grow" @submit.prevent="updateForm">
                                                <input type="text" id="nameFolder"
                                                    v-model="form.name"
                                                    class="w-full h-10 px-3 mr-2 border-2 border-gray-200 rounded-lg">
                                                <button type="submit"
                                                    class="h-10 px-3 mr-2 bg-blue-700 rounded-md text-slate-300">
                                                    Rename
                                                </button>
                                                <button type="button"
                                                    class="h-10 px-3 mr-2 bg-gray-500 rounded-md text-slate-300"
                                                    @click="getIdForRename = null">
                                                    Cancel
                                                </button>
                                            </form>
                                        </div>
                                        <div v-else>
                                            <Link :href="route('project.show', { project: prop.project.id, uuid: child.uuid })" @click="getName = child">
                                                {{ child.objectable.name }}
                                            </Link>
                                        </div>
                                    </td>
                                    <td>-</td>
                                    <td class="grid grid-cols-2">
                                        <button type="button" class="w-1/2 h-10 mx-auto mr-2 text-black bg-orange-300 rounded-md" @click="getIdForRename = child.id; renameValue(child.objectable.name)">Rename</button>
                                        <button class="w-1/2 h-10 mx-auto mr-2 text-red-600 border border-red-600 rounded-md" @click="deleteForm(child.id)">Delete</button>
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
