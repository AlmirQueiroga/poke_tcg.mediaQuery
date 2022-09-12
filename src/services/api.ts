import axios from 'axios';

const token = process.env.REACT_APP_POKEMON_TOKEN

const api = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',
    headers: token ? {
        "X-Api-Key": token
    } : undefined
});

export default api;