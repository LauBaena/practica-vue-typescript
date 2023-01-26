import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

//Creamos la base de la URL que usaremos para todas las llamadas a la API
const fakePlatziApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
});

fakePlatziApi.interceptors.request.use((config: AxiosRequestConfig)=>{
    //Accedemos el token del localStorage 
    const token = localStorage.getItem('token');
    if (token){
        //Si hay toquen, para cada llamada que se haga estableceremos el token en la cabecera
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
    }
    return config;
});

export default fakePlatziApi;