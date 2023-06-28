import React from 'react'
import Image from "next/image";
import logoDark from "../public/images/contactBg.png";
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import BannerBottom from '../components/BannerBottom';
import background3 from "../public/images/backgroundLay.png";
import { sanityClient, urlFor } from "../sanity";

const contact = ({ post, accord, contactdata }: any) => {
  return (
    <div>
    <main className="font-bodyFont">
        <div className="container">
            <div className='contactImage'>
                <Image src={logoDark} alt="logoDark" className='contactImg'/>
                <p className="contactText">{contactdata[0].contactTitle}</p>
              <ContactCard value={contactdata}/>
              <h1 className="textHeader mt-3">Make An Enquiry</h1>
              <h1 className="contact-textHeader mt-3">Have an enquiry? Drop us a message via the following form and we will get back to you as soon as possible.</h1>
              <ContactForm/>
           <div className="nextBanner1">
           <p className="lastText">{post[0].locationText}</p>
           <p className="lastText1">{post[0].locationTitle}</p>
           <p className="lastText2">{post[0].locationPara}</p>
           <iframe className="maps"
           src={post[0].destination}
           style={{border:0}} 
           loading="lazy">
           </iframe>
            <BannerBottom value={accord}/>
            <Image src={background3} alt="background3" className="backImg3" />
          </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto py-20 px-4"></div> 
    </main>
</div>
  )
}
export const getServerSideProps = async () => {
    const query = `*[_type == "post"]{...}`
    const post = await sanityClient.fetch(query);
    const queryData = `*[_type == "accord"]{...}`
    const accord = await sanityClient.fetch(queryData);
    const contactQuery = `*[_type == "contactdata"]{...}`
    const contactdata = await sanityClient.fetch(contactQuery);
    return {
      props: {
        post,
        accord,
        contactdata
      }
    }
  }
export default contact