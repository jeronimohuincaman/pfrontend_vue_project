<script>
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const userStore = useUserStore();
    const logout = () => {
      userStore.logout();
      router.push({ name: 'loginPage' });
    };

    return { router, userStore, logout };
  },
};
</script>

<template>
  <div class="home-container">
    <h1>Bienvenidos a la patalla Home</h1>
    <p v-if="userStore.isLoggedIn">Hola Usuario, {{ userStore.username }}!</p>
    <button @click="logout">Cerrar Sesion</button>
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
