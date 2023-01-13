import { useEffect } from "react";
import { getAuthUri } from "../../helpers/fit";


export default function Oauth(){
    useEffect(()=>{
        if(!window.auth_url){
            window.url = getAuthUri();
            window.location = window.url;
        }
    },[])
}