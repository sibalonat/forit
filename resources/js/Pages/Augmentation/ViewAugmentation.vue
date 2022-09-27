<script setup>

import { ref, shallowRef } from "@vue/reactivity";
import { onBeforeMount, onMounted, watchEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'
// import { VideoTexture } from "troisjs";
import { Box, Camera, LambertMaterial, AmbientLight, Renderer, Scene, VideoTexture } from 'troisjs';

let geolocation = ref(null)
let errorStr = ref(null)
let gettinGeolocation = ref(false)
let long = ref('')
let lat = ref('')
let renderer = ref(null)
let box = ref(null)
// let boxes = ref(2)
let boxes = ref([
    {
        id: 'video1',
    },
    {
        id: 'video2',
    },
])
let arbutton = ref(null)
let aboutvideo = ref(null)
let aboutscreen = ref(null)
let video = ref(null)
let videosrc = ref(null)
let root = route('welcome');
let show = ref(false);
let light = ref(null);
// https://codesandbox.io/s/vue-troisjs-oslvr2?file=/src/components/EmptyBox.vue


onBeforeMount(() => {
    videosrc.value = `${root}/images/animation.mp4`;
})

onMounted(() => {

    ARButton
    console.log(ARButton);
    // play
    // data
    light, show, root, videosrc, aboutscreen, aboutvideo,
        // arbutton,
    box, renderer, lat, long, gettinGeolocation, errorStr, geolocation, boxes


    if (!("geolocation" in navigator)) {
        errorStr.value = 'Geolocation is not available.';
        return;
    }
    gettinGeolocation.value = true;
    navigator.geolocation.getCurrentPosition(pos => {
        geolocation.value = pos;
    })

    arbutton.value.init(
        renderer.value.renderer
    )

    if (renderer.value) {
        let mesh, ti, p, py
        renderer.value.onBeforeRender(() => {
            box.value.forEach((el, i) => {
                el.mesh.material.map.image.play()
                const t = Date.now()
                mesh = el.mesh
                ti = (t - i * 500)

                p = (i * 3)
                py = ((i * 3) - 2)

                mesh.position.x = p
                mesh.position.y = py

                mesh.rotation.x = ti * 0.00015
                mesh.rotation.y = ti * 0.00020
                mesh.rotation.z = ti * 0.00017
            })
        });
    }


    const orbitCtrl = renderer.value.three.cameraCtrl;
    const xr = renderer.value;

})




watchEffect(() => {

    const xr = renderer.value;

    if (geolocation.value) {
        lat.value = geolocation.value.coords.latitude
        long.value = geolocation.value.coords.longitude
    }
})


</script>

<template>
    <div class="w-screen">
        <!-- style="display: none;" -->
        <video ref="aboutvideo" v-for="i in boxes" :key="i.id" :id="i.id" crossOrigin="anonymous" playsinline muted loop
            style="display: none;">
            <source :src="'/images/animation.mp4'" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <button class="flex w-1/5 text-lg text-white bg-slate-900" @click="play"> play </button>

        <Renderer :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" ref="renderer" resize="window" xr alpha
            antialias autoClear>
            <Camera :position="{ z: 10 }" />

            <Scene>

                <AmbientLight :position="{ y: 50, z: 50, x: 20 }" ref="light" />

                <Box ref="box" v-for="item in boxes" :key="item.id" :size="4">
                    <LambertMaterial ref="aboutscreen" v-if="box">
                        <VideoTexture ref="video" :video-id="item.id"></VideoTexture>
                    </LambertMaterial>
                </Box>

            </Scene>
        </Renderer>


        <ARButton ref="arbutton" :enter-message="'Enter AR'" :exit-message="'Leave AR'" />
    </div>


</template>
