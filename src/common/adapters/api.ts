import axios from 'axios';
import { getAccessToken } from '../storage';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
});

axios.defaults.withCredentials = true;
instance.defaults.withCredentials = false;

instance.interceptors.request.use(
    request => {
        const accessToken = getAccessToken();
        console.log(accessToken);
        request.headers.common['Authorization'] = 'Bearer ' + accessToken;
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        return Promise.reject(error);
    }
);

export default instance;