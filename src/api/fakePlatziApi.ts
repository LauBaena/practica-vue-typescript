import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";

const fakePlatziApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
});

fakePlatziApi.interceptors.request.use((config: AxiosRequestConfig)=>{
    //Cogemos el token del localStorage 
    const token = localStorage.getItem('token');
    if (token){
        //En la web de la API que usamos especifican como conseguir el usuario con sesión -> En la cabecera (apartado Auth JWT de fakeapi.platzi.com/en/rest)
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); //JWT
    }

    return config;
});

export default fakePlatziApi;