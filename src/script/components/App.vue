<template>
  <main role="main" class="container">
    <app-header></app-header>
    <camera></camera>
    <controls></controls>
    <credits></credits>
  </main>
</template>

<script>
import AppHeader from './AppHeader.vue'
import Credits from './Credits.vue'
import Camera from './Camera.vue'
import Controls from './Controls.vue'

export default {
  name: 'app',
  components: { AppHeader, Credits, Camera, Controls }
}
</script>
