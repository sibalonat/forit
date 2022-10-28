<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';

import { Head } from '@inertiajs/inertia-vue3';
import { XMarkIcon, SwatchIcon, EllipsisVerticalIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'
import { onMounted, reactive, ref } from '@vue/runtime-core';
import { v3ImgPreviewFn } from 'v3-img-preview'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// import { useBrowserLocation } from '@vueuse/core' getting the route
// const location = useBrowserLocation()


import V3dPlayer from 'v3d-player'
import 'v3d-player/dist/style.css'


const pro = defineProps({
    images: Array
})


const options = reactive({
    autoplay: true,
    muted: true,
    screenshot: true,
    preventClickToggle: true,
    theme: '#FF3366',
    volume: 0.9,
    src: ''
})

// let index = ref(null)
const visibleRef = ref(false)
const indexRef = ref(0)

const target = ref(null)

const handlePreview = (u) => {
    v3ImgPreviewFn(u)
}



const onSlideChange = () => {
    console.log('slidechange');
}

const onSwiper = (swiper) => {
    console.log(swiper);
};

const showImg = (index) => {
    indexRef.value = index
    let thing = pro.images.filter((v, i) => i === index)

    options.src = thing[0]

    visibleRef.value = true
}

// const hideModal = () => {
//     visibleRef.value = false
// }

const onHide = () => visibleRef.value = false

onMounted(() => {
    Head, BreezeAuthenticatedLayout
    // grid
    // console.log(location);
    // icons
    XMarkIcon, SwatchIcon, EllipsisVerticalIcon, EllipsisHorizontalIcon
    Swiper, SwiperSlide, V3dPlayer
    handlePreview, onSlideChange, onSwiper, showImg, onHide
    console.log(pro.images);
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
                <!-- <div class="relative flex justify-center py-40 overflow-hidden bg-white shadow-sm sm:rounded-lg space-x-11"> -->
                <div class="relative flex justify-center py-40 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="max-w-lg">
                        <swiper :slides-per-view="3" :space-between="20" :slidesPerColumn="2" @swiper="onSwiper"
                            @slideChange="onSlideChange">
                            <swiper-slide v-for="(image, index) in pro.images" :key="image">
                                <!-- {{ image.split('.').pop() }} -->
                                <img :src="image" class="w-full" v-if="image.split('.').pop() === 'jpg'" alt=""
                                    @click.stop="handlePreview(image)">
                                <video class="w-full" v-else @click="() => showImg(index)">
                                    <source :src="image" type="video/mp4">
                                </video>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="fixed inset-y-0 z-50 flex w-screen h-screen space-x-0 demo-player" ref="target"
                        v-if="visibleRef">
                        <div class="flex-col w-full my-auto">
                            <div class="grid content-center grid-cols-2 my-auto justify-items-center">
                                <div></div>
                                <div class="pb-5">
                                    <div class="rounded-full bg-slate-50">
                                        <XMarkIcon class="text-black w-7 h-7" @click="onHide"> </XMarkIcon>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/2 m-auto ">
                                <v3d-player ref="playerRef" class="w-1/2 h-auto my-auto" :options="options" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>

</template>


<style>
.demo-player {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
