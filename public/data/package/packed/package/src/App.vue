<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize="window">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box :size="1" ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial>
          <VideoTexture :videoId="'vid'" ref="video"></VideoTexture>
        </LambertMaterial>
      </Box>
    </Scene>
  </Renderer>
  <!-- <ARButton ref="vrbutton" :enterMessage="'start'"></ARButton> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Box, Camera, LambertMaterial, MeshPublicInterface, PointLight, Renderer, RendererPublicInterface, Scene, VideoTexture } from './export'
// import { VideoTexture } from './export'
// import ARButton from './components/misc/ARButton.vue'

export default defineComponent({
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene, VideoTexture },
  mounted() {
    const renderer = this.$refs.renderer as RendererPublicInterface
    const mesh = (this.$refs.box as MeshPublicInterface).mesh
    // console.log(renderer);
    console.log(this.$refs.video)

    // typeof  VideoTexture

    if (renderer && mesh) {
      renderer.onBeforeRender(() => {
        mesh.rotation.x += 0.01
      })
    }
    // this.$refs.vrbutton.init(this.$refs.renderer.renderer)
  },
})
</script>

<style>
body,
html {
  margin: 0;
}

canvas {
  display: block;
}
</style>
