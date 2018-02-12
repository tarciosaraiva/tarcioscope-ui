<template>
  <header>
    <img height="30px" src="../../img/telescope.svg" alt="tarcioscope" />
    <h1>tarcioscope</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="postcss" scoped>
header {
  align-items: center;
  background-color: lavender;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}

header img {
  padding: 0 0 0 20px;
}

header h1 {
  flex: 1;
  font-family: monospace;
  font-size: 2.5em;
  margin: 0;
  padding: 0 20px 0 0;
  text-align: right;
}
</style>
