<script setup lang="ts">
import MovimientosView from './MovimientosView.vue';

</script>

<template>
  <div class="home-container">
    <h1>Bienvenidos a la pantalla Home</h1>
    <MovimientosView />
  </div>
</template>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2c8e6b;
}
</style>
