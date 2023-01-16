import { useEffect, useState } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import { getDataSources } from "../../helpers/google-fit-api";

export default function fitness(){

    const fetchDataSources = async ()=>{
        return await getDataSources();
    }
    const [dataSources,setDataSources] = useState([]);

    useEffect(()=>{
        if(!window.fitness_called){
            fetchDataSources().then(data=>{
                
                if(data){
                    setDataSources(data.dataSource);
                }
            });
            console.log('here',window.localStorage.getItem('token'))
            window.fitness_called=true;
        }
    },[])

    const showDeviceInfo = (ds)=>{
        return (ds.device)? 
        (
            <>
            <p><strong>Device Manufacturer: </strong>{ds.device.manufacturer}</p>
            <p><strong>Device UID: </strong>{ds.device.uid}</p>
            <p><strong>Device Type: </strong>{ds.device.type}</p>
            <p><strong>Device Version: </strong>{ds.device.version}</p>
            <p><strong>Device Model: </strong>{ds.device.model}</p>
            </>
        ):(<></>)
    }

    return (
        <Layout>
            
            <Card title="Google Fit Data Sources">
            <ul>
                {
                    dataSources.map((ds,i)=>{
                    return (<li key={i}>
                        <div className="border-b-2 p-2">
                            <h5><strong>Data Stream Name:</strong>{ds.dataStreamName}</h5>
                            <p><strong>Steam Id: </strong>{ds.dataStreamId}</p>
                            <p><strong>Application Package Name:</strong>{ds.application.packageName}</p>
                            <p><strong>Data Type:</strong>{ds.dataType.name}</p>
                            <p><strong>Type: </strong>{ds.type}</p>
                            {showDeviceInfo(ds)}
                        </div>
                </li>)
                })

            }
            
            </ul>
            </Card>
        </Layout>
    )
}