<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';

onMounted(() => {
    BreezeAuthenticatedLayout
    Head
})

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
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg flex space-x-11 justify-center py-40">
                    <a class="bg-gray-800 text-lg text-gray-200 rounded-lg p-4" href="/create">Create From</a>

                    <a class="bg-gray-800 text-lg text-gray-200 rounded-lg p-4" href="/crt">Create Konva</a>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>



