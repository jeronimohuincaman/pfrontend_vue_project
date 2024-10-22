// src/stores/movimientostore.ts
import { defineStore } from 'pinia';
import type { IMovimiento } from '@/models/movimiento';
import { enviroment } from '@/env/enviroment';
import axios from 'axios';

export const useMovimientoStore = defineStore('movimientostore', {
    state: () => ({
        movimientos: [] as IMovimiento[], // Lista de movimientos financieros
        loading: false,
        error: null
    }),
    actions: {
        // Cargar movimientos desde una API o datos mockeados
        async loadMovimientos() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`${enviroment.movimientos}`,);
                this.movimientos = response.data;
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {
        totalBalance(state) {
            return state.movimientos.reduce((total, mov) => total + mov.monto, 0);
        },
    },
});
