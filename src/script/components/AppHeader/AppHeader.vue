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
  align-items: center;
  color: #f5f5f5;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

.app-header img {
  padding: 0 0 0 20px;
  transition: all .3s;
}

.app-header h1 {
  flex: 1;
  font-family: monospace;
  font-size: 2.5em;
  margin: 0;
  padding: 0 20px 0 0;
  text-align: right;
  transition: all .3s;
}

@media (min-width: 768px) {
  .app-header h1 {
    font-size: 4em;
  }
}
</style>
