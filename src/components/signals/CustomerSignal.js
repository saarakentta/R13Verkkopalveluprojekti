import { effect, signal } from "@preact/signals-react";
import axios from "axios";
import { jwtToken } from "./TokenSignal";

//Setting the base url for axios
axios.defaults.baseURL = 'http://localhost:3001';

export const customerData = signal(null);

//It the token changes the new values is saved to session storage
//Also the personal customer info is fetched
effect(()=>{
    if(jwtToken.value.length !== 0){
        axios.get('/customer', {headers: {Authorization: 'Bearer ' + jwtToken.value}})
            .then(resp => customerData.value = resp.data)
            .catch(error => console.log(error.message))
    }else{
        customerData.value = null;
    }
});