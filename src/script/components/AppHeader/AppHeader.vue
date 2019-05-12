<template>
  <header class="app-header">
    <img :height="height" src="../../../img/telescope.svg" alt="tarcioscope" />
    <h1>tarcioscope</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      height: 30
    }
  },
  methods: {
    defineLogoHeight () {
      if (this.windowWidthGreaterThan768()) {
        this.height = 60
      } else {
        this.height = 30
      }
    },
    windowWidthGreaterThan768 () {
      return window.innerWidth > 768
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

<style lang="postcss" scoped>
.app-header {
  align-content: center;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 48rem;
  margin: 0 auto;
}

.app-header img {
  min-height: 100%;
  transition: all .3s;
}

.app-header h1 {
  flex: auto;
  margin: 0;
  text-align: right;
  transition: all .3s;
}

@media (min-width: 768px) {
  .app-header h1 {
    font-size: 3em;
  }
}
</style>
