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
import throttle from 'lodash.throttle'

export default {
  name: 'camera',
  data () {
    return {
      player: null,
      ws: new WebSocket('ws://gopdopspi:8084/'),
    }
  },
  methods: {
    setupCanvas () {
      const cameraFeedCanvas = this.$refs.camerafeed
      const ctx = cameraFeedCanvas.getContext('2d')
      ctx.fillStyle = '#444'
      ctx.fillText('Loading...', cameraFeedCanvas.width/2-30, cameraFeedCanvas.height/3)
    },
    setupPlayer () {
      this.player = new jsmpeg(this.ws, { canvas: this.$refs.camerafeed, audio: false })
    }
  },
  mounted () {
    this.setupCanvas()
    this.setupPlayer()
  },
  beforeDestroy() {
    this.player = null
  }
}
</script>
