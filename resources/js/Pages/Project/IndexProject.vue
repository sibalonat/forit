<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';

// Link

onMounted(() => {
    BreezeAuthenticatedLayout, Head, Link
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
                        <Link :href="route('project.create')" class="p-4 text-lg text-gray-200 bg-gray-800 rounded-lg">+1 Project</Link>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
