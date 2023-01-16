import axios from "axios";
import { useEffect } from "react";
import Layout from "../../../../components/layout";
import { useRouter } from "next/router";
export default function  fitness(){

    const router = useRouter();

    const getTokens = async (code)=>{
        try{
            const res = await axios.get('http://localhost:8080/api/hello?code='+code);
            if(res.status==200){
                // console.log(res.data.tokens.access_token)
                window.localStorage.setItem('token',res.data.tokens.access_token);
                window.localStorage.setItem('refresh_token',res.data.tokens.refresh_token);
                window.localStorage.setItem('scope',res.data.tokens.scope);
                window.localStorage.setItem('expiry_date',res.data.tokens.expiry_date);
                router.push('/fitness');
            }
                      
        }catch(err){
            console.log(err.response.data.msg)
            router.push('/oauth2');                                
        }
        
    }

    useEffect( ()=>{
        if(!window.fitness_api_called){
           
            const params = new URLSearchParams(window.location.search)
            const code = params.get('code');
            getTokens(code);
            window.fitness_api_called=true
        }
    },[])

    return (<div></div>)
}