<template>
  <main role="main" class="container">
    <vue-progress-bar></vue-progress-bar>
    <app-header></app-header>
    <camera-wrapper class="camera-wrapper"></camera-wrapper>
    <app-footer></app-footer>
  </main>
</template>

<script>
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import CameraWrapper from './CameraWrapper'

export default {
  name: 'app',
  components: { AppHeader, AppFooter, CameraWrapper }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
}

.container .camera-wrapper {
  flex: 1;
}

label, input, select, button {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  box-sizing: border-box;
}
</style>
