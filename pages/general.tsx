import React from 'react'
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import logoDark from "../public/images/gpBackground.png";
import CardLayout from '../components/Cards';


const general = ({ post, gservice }: any) => {
    return (
        <div>
            <main className="font-bodyFont">
                <div className="container">
                    <div>
                        <Image src={logoDark} alt="logoDark" className="imgge" />
                        <p className="bannergpText">{post[0].generalHead} </p>
                        <p className="bannergpText1">{post[0].generalTitle}</p>
                        <p className="smallgpText text-left">{post[0].generalDesc} </p>
                        <div className="top-rightgp"><Image className="bannergpImg" width={380} height={380} src={urlFor(post[0].genralImage).url()} alt="logoDark" /></div>
                    </div>
                    <CardLayout serviceData={gservice}/>
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "general"]{...}`
    const post = await sanityClient.fetch(query);
    const queryData = `*[_type == "gservice"]{...}`
    const gservice = await sanityClient.fetch(queryData);
    return {
        props: {
            post,
            gservice
        }
    }
}
export default general