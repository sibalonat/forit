<script setup>

import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, watchEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'
import { VideoTexture } from "troisjs";
// import * as THREE from "three";
let geolocation = ref(null)
let errorStr = ref(null)
let gettinGeolocation = ref(false)
let long = ref('')
let lat = ref('')
let renderer = ref(null)
let box = ref(null)
let boxes = ref(2)
// let boxes = ref([
//     {
//         id: 'video1',
//         ref: null
//     },
//     {
//         id: 'video2',
//         ref: null
//     },
//     // {video3},
//     // {video4},
// ])
let arbutton = ref(null)
let aboutvideo = ref(null)
let aboutscreen = ref(null)
let video = ref(null)
let videosrc = ref(null)
let root = route('welcome');
let show = ref(false);
let light = ref(null);
// https://codesandbox.io/s/vue-troisjs-oslvr2?file=/src/components/EmptyBox.vue

const play = () => {

    if (aboutvideo.value.paused) {

        // aboutvideo.value.play();
        video.value.texture.image.play()
        show.value = true
    } else {
        video.value.texture.image.pause()

        // aboutvideo.value.pause();
    }
}

const setItemRef = (el, idx) => {
    console.log(el);
    if (el) {
        boxes.value[idx].ref = el;
    }
}

onBeforeMount(() => {
    videosrc.value = `${root}/images/animation.mp4`;
})
// onBeforeMount



onMounted(() => {
    ARButton, VideoTexture
    play, setItemRef
    // data
    light, show, root, videosrc, aboutscreen, aboutvideo,
        arbutton, box, renderer, lat, long, gettinGeolocation, errorStr, geolocation, boxes

    box.value.forEach((element, index) => {
        console.log(element);
    });

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

    // console.log(video.value);
    // console.log(video.value.material.material.map);



    renderer.value.onBeforeRender(() => {
        // renderer.value.alpha = true;
        // console.log(video.value.);
        renderer.value.physicallyCorrectLights = true
        // aboutscreen.value.material.alphaToCoverage = true
        // boxes.value.forEach((element, index) => {
        //     // console.log(element);
        //     // `${element}index`.value.material.needsUpdate = true
        //     // `${element}index`.value.material.material.map.needsUpdate = true
        //     // `${video}index`.value.material.needsUpdate = true
        //     // `${video}index`.value.material.material.map.needsUpdate = true
        //     // video.value.material.material.map.needsUpdate = true
        //     // aboutscreen.value.material.alphaToCoverage = true

        // });

        // console.log(renderer.value);
        // let object = box.value.mesh.rotation.y += 0.01;
        // console.log(object);
        // light.value.lookAt = object

        // video.value.material.material.map.isRenderTargetTexture = true
        // video.value.material.material.map.premultiplyAlpha = true
        // video.value.material.material.map.generateMipmaps = true

        // aboutscreen.value.side = 1

        // box.value.mesh.rotation.y += 0.003;
        // box.value.mesh.rotation.x += 0.0001;
        // console.log(aboutscreen.value);

    });
    // renderer.value.onAfterRender(() => {
    //     // console.log(video.value.texture.image);

    //     // video.value.material.needsUpdate = true
    // })

    console.log(aboutscreen.value.material);
    // :side="'front'"
    console.log(aboutscreen.value);

    // cameraTexture.needsUpdate = true;
    // material.needsUpdate = true;

    // <!-- <Renderer :pointer="{ intersectMode: 'frame' }" ref="renderer" resize="window" orbit-ctrl alpha autoClear xr
    //     antialias> -->
    // <!-- :props="{autoClear: false}" -->
    // <!-- :side="" -->
    // <!-- :props="{ side: 2 }" -->

    // <!-- :props="{color: 0xffffff}" -->
    // <!-- <PointLight :position="{ y: 50, z: 50, x: 50 }" :intensity="1.5" /> -->


    const orbitCtrl = renderer.value.three.cameraCtrl;
    const xr = renderer.value;
    // console.log(xr);
    // console.log(orbitCtrl);
})



// const onPointerOver = (event) => {
//       event.component.mesh.material.color.set(event.over ? 0xff0000 : 0xffffff);
//     }

watchEffect(() => {

    const xr = renderer.value;

    if (geolocation.value) {
        lat.value = geolocation.value.coords.latitude
        long.value = geolocation.value.coords.longitude
    }
})


</script>

<template>
    <!-- xr, autoplay  v-show="false"-->
    <!-- refraction :refraction-ratio="0.95" autoplay -->
    <div class="w-screen">
        <video ref="aboutvideo" v-for="(i,x) in boxes" :key="x" id="`vid${x}`" crossOrigin="anonymous" playsinline muted loop style="display: none">
            <source :src="'/images/animation.mp4'" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <button class="w-1/5 flex bg-slate-900 text-lg text-white" @click="play"> play </button>

        <Renderer v-show="show" :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" ref="renderer"
            resize="window" antialias autoClear alpha xr>
            <Camera :position="{ z: 10 }" />

            <Scene>

                <AmbientLight :position="{ y: 50, z: 50, x: 20 }" ref="light" />
                {{ boxes }}

                <!-- <Box :ref="(el) => setItemRef(el, idx)" -->
                <Box ref="box" :rotation="{ y: Math.PI * 2, z: Math.PI / 2, x: (Math.PI / 2) + 50 }"
                    :scale="{ x: 1.5, z:1 }" v-for="(item, idx) in boxes" :key="idx" :size="4">
                    <!-- {{ box.id }} -->

                    <LambertMaterial ref="aboutscreen">

                        <VideoTexture ref="video" :video-id="'vid`${idx}`'"></VideoTexture>

                    </LambertMaterial>
                </Box>

            </Scene>
        </Renderer>

        <!-- <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
        <Camera :position="{ z: 10 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box :size="1" ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial>
                    <VideoTexture :videoId="'vid'" ref="video"></VideoTexture>
                </LambertMaterial>
            </Box>
        </Scene>
    </Renderer> -->
        <ARButton ref="arbutton" :enter-message="'Enter AR'" :exit-message="'Leave AR'" />
    </div>


</template>
