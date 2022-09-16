<script setup>

import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, watch, watchEffect, watchPostEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'
import { VideoTexture } from "troisjs";
// import { VideoTexture } from "three";
let geolocation = ref(null)
let errorStr = ref(null)
let gettinGeolocation = ref(false)
let long = ref('')
let lat = ref('')
let renderer = ref(null)
let box = ref(null)
let arbutton = ref(null)
let aboutvideo = ref(null)
let aboutscreen = ref(null)
let video = ref(null)
let videosrc = ref(null)
let root = route('welcome');
// https://codesandbox.io/s/vue-troisjs-oslvr2?file=/src/components/EmptyBox.vue

const play = () => {
    aboutvideo.value.play();
}

onBeforeMount(() => {
    videosrc.value = `${root}/images/animation.mp4`;
})
// onBeforeMount



onMounted(() => {
    ARButton,
        play
    if (!("geolocation" in navigator)) {
        errorStr.value = 'Geolocation is not available.';
        return;
    }
    gettinGeolocation.value = true;
    navigator.geolocation.getCurrentPosition(pos => {
        geolocation.value = pos;
    })

    // renderer.value.set({alpha: true})
    // console.log(vrbutton.value.init(renderer.value.renderer));
    arbutton.value.init(
        renderer.value.renderer
    )

    console.log(video.value);
    // console.log(video.value.material);
    // console.log(VideoTexture);

    // src="/images/animation.mp4"
    // videosrc.value = route().current();

    // + /public/images/animation.mp4

    // console.log(videosrc.value);

    // console.log(renderer.value);


    renderer.value.onBeforeRender(() => {
        // renderer.value.alpha = true;

        // box.value.mesh.rotation.y += 0.01;
        // console.log(aboutscreen.value);

    });
    // console.log(box.value.mesh.material.map);
    // console.log(video.value);
    // const vidtex = new VideoTexture(aboutvideo.value);
    // console.log(vidtex);
    // aboutscreen.value.setTexture(vidtex);
    // aboutscreen.value.setTexture(vidtex);
    console.log(aboutscreen.value.material);



    const orbitCtrl = renderer.value.three.cameraCtrl;
    const xr = renderer.value;
    // console.log(xr);
    // console.log(orbitCtrl);
})



// const onPointerOver = (event) => {
//       event.component.mesh.material.color.set(event.over ? 0xff0000 : 0xffffff);
//     }

watchEffect(() => {
    // console.log(geolocation.value);
    const xr = renderer.value;
    // console.log(videosrc.value);

    // console.log(xr);
    console.log(VideoTexture);

    if (geolocation.value) {
        lat.value = geolocation.value.coords.latitude
        long.value = geolocation.value.coords.longitude
        // console.log(lat.value);
        // console.log(long.value);
    }
})


</script>

<template>
    <!-- xr, autoplay -->
    <video ref="aboutvideo" id="vid" controls autoplay :src="videosrc" loop />
    <button class="w-1/5 flex bg-slate-900 text-lg text-white" @click="play"> play </button>
    <Renderer :pointer="{ intersectMode: 'frame' }" ref="renderer" resize="window" orbit-ctrl alpha autoClear xr
        antialias>
        <Camera :position="{ z: 10 }" />

        <Scene>

            <Plane ref="box" :rotation="{ y: Math.PI * 2, z: Math.PI / 2 }">

                <LambertMaterial ref="aboutscreen">

                    <VideoTexture ref="video" :video-id="'vid'" />

                </LambertMaterial>
            </Plane>

        </Scene>
    </Renderer>
    <ARButton ref="arbutton" :enter-message="'Enter AR'" :exit-message="'Leave AR'" />


</template>
