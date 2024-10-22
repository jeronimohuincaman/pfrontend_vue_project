<template>
    <div>
        <h1>Lista de Movimientos Financieros</h1>
        <div v-if="loading">Cargando...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <ul v-if="movimientos.length">
            <li v-for="mov in movimientos" :key="mov.idmovimiento">
                {{ mov.descripcion }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMovimientoStore } from '@/stores/MovimientoStore';

const movimientoStore = useMovimientoStore();
const { movimientos, loading, error } = movimientoStore;

onMounted(() => {
    movimientoStore.loadMovimientos();
});
</script>