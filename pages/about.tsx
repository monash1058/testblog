import React from 'react'
import { sanityClient, urlFor } from "../sanity";
import Image from "next/image";
import logoDark from "../public/images/aboutBg.png";
import logoDark2 from "../public/images/aboutBg2.png";
import AboutCard from '../components/AboutCard';


const about = ({ post, aservice }: any) => {
    return (
        <div>
            <main className="font-bodyFont">
                <div className="container">
                    <div>
                        <Image src={logoDark} alt="logoDark" className="imgge" />
                        <p className="bannergpText1">{post[0].aboutTitle}</p>
                        <p className="smallgpText text-left">{post[0].aboutDesc} </p>
                        <div className="top-rightgp"><Image className="bannergpImg" width={380} height={380} src={urlFor(post[0].aboutImage).url()} alt="logoDark" /></div>
                    </div>
                    <div>
                        <Image src={logoDark2} alt="logoDark" className='aboutImg'/>
                        <p className="aboutText">{post[0].aboutTitle2} </p>
                        <p className="aboutText1">{post[0].aboutText}</p>
                        <p className="aboutSmallText text-left">{post[0].aboutText2}</p>
                        <div className="top-rightabout"><Image className="banneraboutImg" width={380} height={380} src={urlFor(post[0].aboutImage2).url()} alt="logoDark" /></div>
                    </div>
                    <h1 className="textHeader mt-3">{post[0].aboutHeadline}</h1>
                    <AboutCard service={aservice}/>
                </div>
            </main>
        </div>
    )
}
export const getServerSideProps = async () => {
    const query = `*[_type == "about"]{...}`
    const post = await sanityClient.fetch(query);
    const queryData = `*[_type == "aservice"]{...}`
    const aservice = await sanityClient.fetch(queryData);
    return {
        props: {
            post,
            aservice
        }
    }
}
export default about