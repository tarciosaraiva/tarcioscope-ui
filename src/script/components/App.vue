<template>
  <main role="main" class="container">
    <app-header></app-header>
    <camera-wrapper class="camera-wrapper"></camera-wrapper>
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import CameraWrapper from './CameraWrapper'

export default {
  name: 'app',
  components: { AppHeader, AppFooter, CameraWrapper }
}
</script>

<style lang="postcss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .container {
    margin: 0 auto;
    max-width: 768px;
  }
}

.container .camera-wrapper {
  flex: 1;
}
</style>
