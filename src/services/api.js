import axios from 'axios';

const url = 'https://pokeapi.co/api/v2';

const api = axios.create({
  baseURL: url,
});

export default api;
