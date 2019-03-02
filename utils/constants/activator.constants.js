import axios from 'axios';

export const appActivate = () => {
    axios.defaults.headers.post['Content-Type'] = "application/json";
    if(typeof window !== 'undefined') {
        window.axios = axios;
    }
}