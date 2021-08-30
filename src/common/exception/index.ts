import { AxiosError, AxiosInstance } from 'axios';
import { getTokenAuth } from '../adapters/authentication';
import { setAccessToken } from '../storage';

export const handleError = async (instance: AxiosInstance, error: AxiosError) => {

    return getTokenAuth().then(response => {        
        setAccessToken(response.token);
        error.config.headers.Authorization = 'Bearer ' + response.token;
        return instance.request(error.config);
    })
}