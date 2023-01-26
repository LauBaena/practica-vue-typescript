import { RouteLocation } from "vue-router";

const haveRoleGuard = (to:RouteLocation, from:RouteLocation, next: any) => {

    const userToken = localStorage.getItem('token');
    //Si hay token almacenado en el localStorage, podremos acceder. Si no, volvemos al login
    if(userToken){
        next();
    }else{
        alert('You need a token to access');
        next({name: 'login'});
    }
}

export default haveRoleGuard;