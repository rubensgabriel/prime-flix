import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=80bc521257d526417b54c7ea6168444b

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;