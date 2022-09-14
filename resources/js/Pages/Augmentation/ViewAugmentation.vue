<script setup>

import { ref } from "@vue/reactivity";
import { onMounted, watchEffect } from "@vue/runtime-core";
import ARButton from 'troisjs/src/components/misc/ARButton.vue'

let geolocation = ref(null)
let errorStr = ref(null)
let gettinGeolocation = ref(false)
let long = ref('')
let lat = ref('')
let renderer = ref(null)
let box = ref(null)
let arbutton = ref(null)

// https://codesandbox.io/s/vue-troisjs-oslvr2?file=/src/components/EmptyBox.vue

onMounted(() => {
    ARButton
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

    console.log(renderer.value);


    renderer.value.onBeforeRender(() => {
        // renderer.value.alpha = true;
        box.value.mesh.rotation.x += 0.01;
    });



    // .three.cameraCtrl


    const orbitCtrl = renderer.value.three.cameraCtrl;
    const xr = renderer.value;
    // console.log(xr);
    console.log(orbitCtrl);
})

watchEffect(() => {
    console.log(geolocation.value);
    const xr = renderer.value;
    console.log(xr);

    if (geolocation.value) {
        lat.value = geolocation.value.coords.latitude
        long.value = geolocation.value.coords.longitude
        console.log(lat.value);
        console.log(long.value);
    }

})
</script>

<template>
<!-- xr -->
    <Renderer ref="renderer" resize="window" orbit-ctrl alpha autoClear xr antialias>
        <Camera :position="{ z: 10 }" />
        <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
                <LambertMaterial />
            </Box>
        </Scene>
        <!-- <EffectComposer>
            <RenderPass />
            <UnrealBloomPass :strength="1" />
            <HalftonePass :radius="1" :scatter="0" />
        </EffectComposer> -->
    </Renderer>
    <ARButton ref="arbutton" :enter-message="'Enter AR'" :exit-message="'Leave AR'" />


</template>
