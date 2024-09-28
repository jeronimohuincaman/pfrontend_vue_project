<script>
import { useRouter } from 'vue-router';
import { usuarios } from '@/models/usuario';

export default {
    // Modelo de datos de este componente
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            error: null,
            success: null
        };
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    // Modelo de metodos que realiza el componente
    methods: {
        onSubmit() {
            // Buscamos un usuario que coincida con nuestros inputs
            const usuarioEncontrado = usuarios.find(u => u.username == this.form.username && u.password == this.form.password);

            if (usuarioEncontrado) {
                this.success = 'Login existoso';
                this.error = null;
                // Navegar a HomeView
                this.router.push({ name: 'home' });
            } else {
                this.error = 'Usuario o contrasena incorrectas';
                this.success = null;
            }
        },
    },
};
</script>

<template>
    <!-- Contenedor principal del formulario -->
    <div class="login-container">
        <h2>Login</h2>
        <!-- Es un  formulario con evento @submit que al enviarse ".prevent" previene el comportamiento por defecto de la pagina de recargarse -->
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">Username</label>
                <!-- Relaciono el input `username` con el valor del `Modelo` -->
                <input type="text" v-model="form.username" id="username" placeholder="Enter your username: admin"
                    required />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <!-- Relaciono el input `password` con el valor del `Modelo` -->
                <input type="password" v-model="form.password" id="password" placeholder="Enter your password: admin"
                    required />
            </div>

            <button type="submit">Login</button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="success" class="success-message">{{ success }}</p>
    </div>
</template>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 4px;
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

.error-message {
    color: red;
    text-align: center;
    margin-top: 1rem;
}

.success-message {
    color: green;
    text-align: center;
    margin-top: 1rem;
}
</style>