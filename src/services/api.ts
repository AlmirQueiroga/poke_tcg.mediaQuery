import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',
    headers:{
        "X-Api-Key": "d2fb5e5d-8761-4aeb-b7fa-d25d0393f8b9"
    }
});

export default api;