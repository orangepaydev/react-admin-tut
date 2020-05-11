import { AuthProvider } from 'ra-core';

const customAuthProvider: AuthProvider = {
    login: ({ username, password }) => {
        localStorage.setItem('username', username);
        localStorage.setItem('token', 'admin');
        // accept all username/password combinations
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () =>
        localStorage.getItem('username') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        const role = localStorage.getItem('token');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};

export default customAuthProvider;