<template>
  <div id="buds">
    <button @click="onClick">{{ message }}</button>
  </div>
</template>

<script>

export default {
  props: {
    enterMessage: { type: String, default: 'ENTER VR' },
    exitMessage: { type: String, default: 'EXIT VR' },
  },
  data() {
    return {
      error: '',
      xrSupport: false,
      currentSession: null,
    }
  },
  computed: {
    message() {
      if (this.xrSupport) {
        return this.currentSession ? this.exitMessage : this.enterMessage
      } else if (this.error) {
        return this.error
      }
      return ''
    },
  },
  created() {
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        this.xrSupport = supported
        console.log(this.xrSupport)
      })
    } else {
      if (window.isSecureContext === false) {
        this.error = 'WEBXR NEEDS HTTPS'
      } else {
        this.error = 'WEBXR NOT AVAILABLE'
      }
    }
  },
  methods: {
    init(renderer) {
      console.log(renderer)
      console.log(this.xrSupport)
      this.renderer = renderer
    },
    onClick() {
      if (!this.xrSupport) return
      if (!this.renderer) return

      if (this.currentSession) {
        this.currentSession.end()
      } else {
        const sessionInit = {
          optionalFeatures: ["dom-overlay", 'local-floor', 'local'],
          // domOverlay: {
          //   root: document.querySelector('#buds'),
          // },
        }
        navigator.xr.requestSession('immersive-ar', sessionInit).then(this.onSessionStarted)
      }
    },
    async onSessionStarted(session) {
      session.addEventListener('end', this.onSessionEnded)
      await this.renderer.xr.setSession(session)
      this.currentSession = session
    },
    onSessionEnded() {
      this.currentSession.removeEventListener('end', this.onSessionEnded)
      this.currentSession = null
    },
  },
}
</script>

<style scoped>
button {
  cursor: pointer;
  position: absolute;
  width: 100px;
  left: calc(50% - 50px);
  bottom: 20px;
  padding: 12px 6px;
  border: 1px solid #fff;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  font: normal 13px sans-serif;
  text-align: center;
  opacity: 0.5;
  outline: none;
  z-index: 999;
}

button:hover {
  opacity: 1;
}
</style>
