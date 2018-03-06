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

import './App.css'

export default {
  name: 'app',
  components: { AppHeader, AppFooter, CameraWrapper }
}
</script>
