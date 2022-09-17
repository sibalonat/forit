<script setup>

import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, watch, watchEffect, watchPostEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'
import { VideoTexture } from "troisjs";
import * as THREE from "three";
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

    if (aboutvideo.value.paused) {

        aboutvideo.value.play();
    } else {

        aboutvideo.value.pause();
    }
}

onBeforeMount(() => {
    videosrc.value = `${root}/images/animation.mp4`;
})
// onBeforeMount



onMounted(() => {
    ARButton, THREE
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
    console.log(video.value.material.material.map);
    // console.log(video.value.material);
    // console.log(VideoTexture);

    // src="/images/animation.mp4"
    // videosrc.value = route().current();

    // + /public/images/animation.mp4

    // console.log(videosrc.value);

    // console.log(renderer.value);


    renderer.value.onBeforeRender(() => {
        // renderer.value.alpha = true;
        // console.log(video.value.);
        video.value.material.needsUpdate = true
        video.value.material.material.map.needsUpdate = true
        // aboutscreen.value.material.alphaToCoverage = true
        // renderer.value.physicallyCorrectLights = true
        // renderer.value.outputEncoding = THREE.sRGBEncoding
        // renderer.value.toneMapping = THREE.ACESFilmicToneMapping
        // renderer.value.toneMappingExposure = 1.3
        // video.value.material.material.map.isRenderTargetTexture = true
        // video.value.material.material.map.premultiplyAlpha = true
        // video.value.material.material.map.generateMipmaps = true

        // aboutscreen.value.side = 1

        // box.value.mesh.rotation.y += 0.01;
        // console.log(aboutscreen.value);

    });
    renderer.value.onAfterRender(() => {
        // console.log(video.value.texture.image);

        // video.value.material.needsUpdate = true
    })
    video.value.texture.image.play()
    // console.log(box.value.mesh.material.map);
    // console.log(video.value);
    // const vidtex = new VideoTexture(aboutvideo.value);
    // console.log(vidtex);
    // aboutscreen.value.setTexture(vidtex);
    // aboutscreen.value.setTexture(vidtex);
    console.log(aboutscreen.value.material);
    // :side="'front'"
    console.log(aboutscreen.value);

    // cameraTexture.needsUpdate = true;
    // material.needsUpdate = true;



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
    // console.log(VideoTexture);
    console.log(video.value);

    if (geolocation.value) {
        lat.value = geolocation.value.coords.latitude
        long.value = geolocation.value.coords.longitude
        // console.log(lat.value);
        // console.log(long.value);
    }
})


</script>

<template>
    <!-- xr, autoplay  v-show="false"-->
    <!-- refraction :refraction-ratio="0.95" autoplay -->
    <video ref="aboutvideo" id="vid" crossOrigin="anonymous" playsinline muted loop>
        <source :src="'/images/animation.mp4'" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    </video>
    <button class="w-1/5 flex bg-slate-900 text-lg text-white" @click="play"> play </button>
    <!-- <Renderer :pointer="{ intersectMode: 'frame' }" ref="renderer" resize="window" orbit-ctrl alpha autoClear xr
        antialias> -->
    <!-- :props="{autoClear: false}" -->
    <!-- :side="" -->
    <!-- :props="{ side: 2 }" -->
    <Renderer :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" ref="renderer" resize="window" antialias
        autoClear alpha xr>
        <Camera :position="{ z: 10 }" />

        <Scene>

            <Box ref="box" :rotation="{ y: Math.PI * 2, z: Math.PI / 2 }" :size="4">

                <!-- :props="{color: 0xffffff}" -->
                <LambertMaterial  ref="aboutscreen" >

                    <VideoTexture ref="video" :video-id="'vid'"></VideoTexture>

                </LambertMaterial>
            </Box>

        </Scene>
    </Renderer>
    <ARButton ref="arbutton" :enter-message="'Enter AR'" :exit-message="'Leave AR'" />


</template>
