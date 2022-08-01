<template>
  <div id="app">
    <div class="mb-3">
      <span class="label label-primary">Vue v {{ version }}</span>
    </div>
   <Board />
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'App',
  components: {
    Board,
  },
  data() {
    return {
      version: '3.2.13'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}

.mb-3 { margin-bottom: 5rem;}
</style>
