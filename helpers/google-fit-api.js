import axios from "axios";

export const getDataSources = async ()=>{
    const token = window.localStorage.getItem('token');
    console.log('token',token);
    try{
        
        const res = await axios.get('https://www.googleapis.com/fitness/v1/users/me/dataSources',{
                    headers:{'Authorization':'Bearer '+token}
                });
        return res.data;
    }catch(error){
        console.log(error);
    }
}