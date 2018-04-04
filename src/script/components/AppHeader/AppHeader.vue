<template>
  <header>
    <img :height="height" src="../../../img/telescope.svg" alt="tarcioscope" />
    <h1>tarcioscope</h1>
  </header>
</template>

<script>
import './AppHeader.css'

export default {
  name: 'app-header',
  data () {
    return {
      height: 30
    }
  },
  methods: {
    defineLogoHeight () {
      if (window.innerWidth > 768) {
        this.height = 60
      } else {
        this.height = 30
      }
    },
    handleWindowResize (e) {
      this.defineLogoHeight()
    }
  },
  created () {
    this.defineLogoHeight()
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  },
  destroyed () {
    window.removeEventListener('resize')
  }
}
</script>
