<template>
  <div class="wrapper">
    <camera></camera>
    <controls></controls>
  </div>
</template>

<script>
import Camera from './Camera.vue'
import Controls from './Controls'

export default {
  name: 'camera-wrapper',
  components: { Camera, Controls }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  padding: 10px 10px 0;
  text-align: center;
}
</style>
