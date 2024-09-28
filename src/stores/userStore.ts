// src/store/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
        password: '',
        isLoggedIn: false,
    }),
    actions: {
        setUser(username: string, password: string) {
            this.username = username;
            this.password = password;
            this.isLoggedIn = true;
        },
        logout() {
            this.username = '';
            this.password = '';
            this.isLoggedIn = false;
        },
    },
});
