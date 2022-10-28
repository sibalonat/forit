<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, usePage } from '@inertiajs/inertia-vue3';
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const prop = defineProps({
    users: Array,
    roles: Object
})


const role = computed(() => usePage().props.value.auth.role)
// const user = computed(() => usePage().props.value.auth.user)

// let ruolo = ref(null)

// const filtrole = (roles) => {
//     switch (roles[0]) {
//         case 'Super-Admin':
//             console.log('super ke');
//             // const super = 'Super-Admin'
//             break;

//             default:
//             console.log('super');
//             break;
//     }
//     // console.log(roles);
//     // if (roles.length > 1) {
//     //     return [...roles]
//     // } else {
//     //     return roles[1]
//     // }

// }
const callChange = (u, e) => {
    console.log(u);
    console.log(e.target.value);
    const role = e.target.value
    Inertia.visit(route('user.change'), {
        method: 'post',
        data: {u, role},
        replace: false,
        preserveState: false,
        preserveScroll: false,
        only: [],
        headers: {},
        errorBag: null,
        forceFormData: false,
        onCancelToken: cancelToken => { },
        onCancel: () => { },
        onBefore: visit => { },
        onStart: visit => { },
        onProgress: progress => { },
        onSuccess: page => { },
        onError: errors => { },
        onFinish: visit => { },
    })
}

onMounted(() => {
    Head, BreezeAuthenticatedLayout
    // console.log(role);
    callChange
    role, prop.users, prop.roles
    // ruolo.value = filtrole(role.value)
    // console.log(ruolo.value);
    // let image = filtrole(role.value)
    // console.log(image);
    // console.log(prop.users);
    // console.log(prop.roles);

})




</script>

<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                User
            </h2>
        </template>
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex justify-center py-40 overflow-hidden bg-white shadow-sm sm:rounded-lg space-x-11">
                    <div v-if="role.includes('Super-Admin')">
                        <ul class="list-none">
                            <li v-for="user in prop.users" :key="user.id" class="px-3 py-5 my-8 border rounded-md">
                                <div class="grid grid-flow-row grid-cols-11 gap-x-3">
                                    <div class="col-span-6 my-auto">
                                        {{ user.name }}
                                    </div>
                                    <div class="col-span-3 col-start-7 my-auto">
                                        <div class="flex items-center h-100" v-for="role in user.roles" :key="role.id">
                                            {{ role.name }}
                                        </div>
                                    </div>
                                    <div>
                                        <label for="user-roles">Select Role</label>
                                        <select name="user-role" id="user-roles" @change="callChange(user, $event)">
                                            <option value="">Select Role</option>
                                            <option v-for="role in prop.roles" :key="role.id" :value="role.id">{{ role.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                            </li>
                        </ul>
                        <div class="mt-24" v-if="role.includes('employee')">
                            kete sheh employee
                        </div>
                        <div class="mt-24" v-if="role.includes('admin')">
                            kete sheh admini

                        </div>
                    </div>
                    <!-- <div v-if="role.includes('Super-Admin')">
                        kaq ka
                    </div> -->
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>

</template>
