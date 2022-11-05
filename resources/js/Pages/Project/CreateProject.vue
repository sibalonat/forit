<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';

const form = useForm({
    name: ''
})

const submitFrom = () => {
    form.post(route('project.post'))
}

onMounted(() => {
    BreezeAuthenticatedLayout, Head, Link
    form, submitFrom
})


</script>

<template>
    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Project Create
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="relative overflow-visible bg-white shadow-sm sm:rounded-lg">
                    <div class="flex justify-center py-40 overflow-hidden bg-white shadow-sm sm:rounded-lg space-x-11">
                        <form @submit.prevent="submitFrom">
                            <label for="project" class="flex">Project Name</label>
                            <input type="text" id="project" v-model="form.name">
                            <button class="flex px-6 py-2 mt-2 text-orange-300 rounded-md bg-slate-500">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
