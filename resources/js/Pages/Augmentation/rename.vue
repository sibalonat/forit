<script setup>

import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, watchEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'
// import { VideoTexture } from "troisjs";
// const VideoTexture = defineAsyncComponent(() => import("troisjs"));

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
    // {video3},
    // {video4},
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

// const setItemRef = (el, idx) => {
//     console.log(el);
//     if (el) {
//         boxes.value[idx].ref = el;
//     }
// }

onBeforeMount(() => {
    videosrc.value = `${root}/images/animation.mp4`;
    // console.log(VideoTexture);
})
// onBeforeMount



onMounted(() => {
    // console.log(VideoTexture);
    ARButton
    play
    console.log();
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

    if (renderer.value) {
        renderer.value.onBeforeRender(() => {
            // renderer.value.alpha = true;
            // renderer.value.antialias = true;
            // renderer.value.autoClear = true;

            // console.log(video.value.);
            renderer.value.physicallyCorrectLights = true
            // console.log(video.value);
            // boxes.value.forEach((element, i) => {
            //     console.log(element)
            //     // video.value[i].texture.image.play()
            // });
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
    }
    // console.log(renderer.value.setAlpha = true);


    const orbitCtrl = renderer.value.three.cameraCtrl;
    const xr = renderer.value;

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
    <!-- <Box :ref="(el) => setItemRef(el, idx)" -->
    <!-- refraction :refraction-ratio="0.95" autoplay -->
    <!-- v-show="show"  v-show="show" -->
    <div class="w-screen">
        <video ref="aboutvideo" v-for="i in boxes" :key="i.id" :id="i.id" crossOrigin="anonymous" playsinline muted
            loop>
            <!-- {{ x }} style="display: none" -->
            <source :src="'/images/animation.mp4'" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
        <button class="flex w-1/5 text-lg text-white bg-slate-900" @click="play"> play </button>

        <Renderer :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" ref="renderer" resize="window" xr alpha
            antialias autoClear>
            <Camera :position="{ z: 10 }" />

            <Scene>

                <AmbientLight :position="{ y: 50, z: 50, x: 20 }" ref="light" />

                <Box ref="box" v-for="item in boxes" :key="item.id" :size="4">
                    <!-- {{ item.id }} -->
                    <!-- :scale="{ x: 1.5, z:1 }" -->
                    <!-- :rotation="{ y: Math.PI * 2, z: Math.PI / 2, x: (Math.PI / 2) + 50 }" -->

                    <LambertMaterial ref="aboutscreen">
                        <!-- {{ `vid${idx}` }} -->
                        <!-- ref="video" -->
                        <Suspense>
                            <!-- component with nested async dependencies -->
                            <KeepAlive>
                                <VideoTexture ref="video" :video-id="item.id"></VideoTexture>
                            </KeepAlive>

                            <!-- loading state via #fallback slot -->
                            <template #fallback>
                                Loading...
                            </template>
                        </Suspense>



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
