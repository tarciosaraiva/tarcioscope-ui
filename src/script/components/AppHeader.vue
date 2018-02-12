<template>
  <header>
    <img src="../../img/telescope.svg" alt="tarcioscope" />
    <h1>tarcioscope</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  height: 60px;
}

header img {
  flex: 0.1;
}

header h1 {
  flex: 1;
}
</style>
