import Card from "../../components/card";
import ImageListItem from "../../components/image-list-item";
import Layout from "../../components/layout";

export default function Videos(){
    return <Layout>
            <Card title="Videos">
                <div className="p-5">
                    {/* <p>No content found</p> */}

                    <ImageListItem/>
                    <ImageListItem/>
                    <ImageListItem/>
                    <ImageListItem/>
                    <ImageListItem/>
                    <ImageListItem/>
                </div>
            </Card>
        </Layout>
}