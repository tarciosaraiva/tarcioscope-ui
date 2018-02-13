<template>
  <div class="wrapper">
    <camera></camera>
    <controls></controls>
  </div>
</template>

<script>
import Camera from './Camera.vue'
import Controls from './Controls.vue'

export default {
  name: 'camera-wrapper',
  components: { Camera, Controls }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  background-color: whitesmoke;
  padding: 20px;
  text-align: center;
}
</style>
