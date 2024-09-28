export interface Usuario {
    id: number;
    username: string;
    password: string;
}

export const usuarios: Usuario[] = [
    { id: 1, username: 'granjero', password: '1234' },
    { id: 2, username: 'supergreanjero', password: '1234' },
    { id: 2, username: 'admin', password: 'admin' },
]
