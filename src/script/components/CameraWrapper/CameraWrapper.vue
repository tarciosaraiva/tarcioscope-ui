<template>
  <div class="wrapper">
    <camera />
    <controls
      :iso="settings.iso"
      :meter-mode="settings.meterMode"
      :exposure-mode="settings.exposureMode" />
    <div v-for="photo in photos">
      <img :src="photo.photoUrl" width="340" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Camera from './Camera.vue'
import Controls from './Controls'

export default {
  name: 'camera-wrapper',
  components: { Camera, Controls },
  computed: {
    ...mapState({
      settings: state => state.settings,
      photos: state => state.photos
    })
  },
  methods: {
    ...mapActions(['loadCameraSettings'])
  },
  created () {
    this.loadCameraSettings()
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  padding: 10px 10px 0;
  text-align: center;
}
</style>
