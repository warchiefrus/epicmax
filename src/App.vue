<template>
  <div id="app">
    <div class="container">
      <Repos />
    </div>
  </div>
</template>

<script>
import Repos from '@/views/Repos.vue'

export default {
  name: 'App',
  components: {
    Repos
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $app-background;
  min-height: 100vh;
}
</style>
