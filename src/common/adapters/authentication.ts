import api from './api';

export const getTokenAuth = async () => {
    const response = await api.post('auth', { username: 'sarah', password: 'connor' });
    return response.data;
}