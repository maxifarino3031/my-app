import axios from 'axios';
import { handleError } from '../exception';
import { getAccessToken } from '../storage';

const instance = axios.create({
    baseURL: 'http://localhost:8081/', /**Se deveria crear un file .env por entorno que se tenga */
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
        if (error.response.status === 401) {
            return await handleError(instance, error);
        }
        return Promise.reject(error);
    }
);

export default instance;