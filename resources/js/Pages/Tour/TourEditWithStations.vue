<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';
import { onMounted } from '@vue/runtime-core';
// console.log('has mounted');
// const prop = defineProps({
//     tours: Object
// })

const form = useForm({
    title: '',
});

// axios.get("/api/v2/billings/subscriptions/volumes", {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             params: {
//                 filter_by: "monthly",
//             },
//         });

onMounted(() => {
    console.log('loaded');
    // console.log(prop.tours.length);
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
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg flex space-x-11 justify-center py-40">
                    <form @submit.prevent="store" class="border p-3">
                        <!-- <label for="title" class="flex">Title</label>
                        <input type="text" id="title" placeholder="write the title here" v-model="form.title">
                        <button type="submit" class=" px-6 py-2 ml-2 bg-slate-900 text-white">save</button> -->
                    </form>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>

</template>
