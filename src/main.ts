
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/global.css';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Tema (opcional)
import 'primevue/resources/primevue.min.css'; // Estilos de componentes
import 'primeicons/primeicons.css'; // Iconos
import 'primeflex/primeflex.css'; // Flexbox grid system de PrimeVue

const app = createApp(App)

app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
