<template>
  <div id="app">
    <WaveForm></WaveForm>
  </div>
</template>

<script>
import WaveForm from './components/home/waveform.vue'


export default {
  name: 'app',
  components: {
    WaveForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
