import React from 'react'
import Image from "next/image";
import logoDark from "../public/images/dentalBg.png";
import { sanityClient, urlFor } from "../sanity";
import DentalCard from '../components/DentalCard';

const dental = ({ post, dservice }: any) => {
    return (
        <div>
            <main className="font-bodyFont">
                <div className="container">
                    <div>
                        <Image src={logoDark} alt="logoDark" className="imgge" />
                        <p className="bannergpText">{post[0].dentalHead} </p>
                        <p className="bannergpText1">{post[0].dentalTitle}</p>
                        <p className="smallgpText text-left">{post[0].dentalDesc} </p>
                        <div className="top-rightgp"><Image className="bannergpImg" width={380} height={380} src={urlFor(post[0].dentalImage).url()} alt="logoDark" /></div>
                    </div>
                    <h1 className="textHeader">{post[0].dentalHeadline}</h1>
                    <DentalCard service={dservice}/>
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "dental"]{...}`
    const post = await sanityClient.fetch(query);
    const queryData = `*[_type == "dservice"]{...}`
    const dservice = await sanityClient.fetch(queryData);
    return {
        props: {
            post,
            dservice
        }
    }
}

export default dental