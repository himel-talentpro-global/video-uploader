import { Button } from "../../components/button";
import Card from "../../components/card";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
    export default function Upload(){
        return <Layout>
            <Card title="Upload Your Video">
                <div className="p-4 text-center">
                    <FontAwesomeIcon size="6x" className="text-slate-500" icon={faCloudArrowUp}/>
                    <br/>
                    <p className="mt-4 mb-4">Drag and drop your file</p>
                    <Button className="w-30 mb-4">Select File</Button>
                </div>
            </Card>
        </Layout>
    }