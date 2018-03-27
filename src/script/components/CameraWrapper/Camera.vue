<template>
  <canvas id="camerafeed" width="640" height="480" ref="camerafeed">
    <p>
      Please use a browser that supports the Canvas Element, like
      <a href="http://www.google.com/chrome">Chrome</a>,
      <a href="http://www.mozilla.com/firefox/">Firefox</a>,
      <a href="http://www.apple.com/safari/">Safari</a> or Internet Explorer 10
    </p>
  </canvas>
</template>

<script>
import jsmpeg from 'jsmpeg'
import { mapState } from 'vuex'

export default {
  name: 'camera',
  data () {
    return {
      player: null
    }
  },
  computed: {
    ...mapState(['snapping'])
  },
  methods: {
    setupCanvas () {
      const cameraFeedCanvas = this.$refs.camerafeed
      const ctx = cameraFeedCanvas.getContext('2d')
      ctx.fillStyle = '#444'
      ctx.fillText('Loading...', cameraFeedCanvas.width/2-30, cameraFeedCanvas.height/3)
    },
    setupPlayer () {
      const ws = new WebSocket(`ws://${process.env.CAMERA_SERVER_HOST}:${process.env.CAMERA_SERVER_PORT}/ws`)
      this.player = new jsmpeg(ws, { canvas: this.$refs.camerafeed, audio: false })
    },
    stopPlayer () {
      this.player.stop()
    }
  },
  created () {
    window.addEventListener('beforeunload', this.stopPlayer)
  },
  mounted () {
    this.setupCanvas()
    this.setupPlayer()
  },
  beforeDestroy () {
    this.stopPlayer()
  }
}
</script>
