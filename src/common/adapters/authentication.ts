import api from './api';

export const getTokenAuth = async () => {
    const response = await api.post('http://localhost:8081/auth', { username: 'sarah', password: 'connor' });
    return response.data;
}