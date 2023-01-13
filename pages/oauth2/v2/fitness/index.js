import { useEffect } from "react";
import Layout from "../../../../components/layout";

export default function  fitness(){

    useEffect( ()=>{
        if(!window.fitness_api_called){
           
            const params = new URLSearchParams(window.location.search)
            
            fetch('http://localhost:8080/api/hello?code='+params.get('code'))
            .then(res=>res.json()).then(data=>{
                console.log(data);
            //     // window.localStorage.setItem('token',data.access_token);
            //     // window.localStorage.setItem('refreshToken',data.refresh_token);
            //     // window.localStorage.setItem('scope',data.scope);
            //     // window.localStorage.setItem('tokenType',data.token_type);
            //     // window.localStorage.setItem('expiryDate',data.expiry_date);
            });

            window.fitness_api_called=true
        }
    },[])

    return (<div></div>)
}