const KEY_NAME = 'token';

/**
 * 
 * @param token 
 */
export const setAccessToken = (token: string) => {
    localStorage.setItem(KEY_NAME, token);
};

export const getAccessToken = () => {    
    return localStorage.getItem(KEY_NAME);
};
