import React from 'react'
import Image from "next/image";
import { urlFor } from "../sanity";

const AboutCard = (props:any) => {
  return (
    <div className='about-cards-layout'>
    {
        props.service.map((services: any) => (
            <div className="about-card" key={services._id}>
                <div className="about-container-card">
                        <Image className='about-card-image' width={380} height={380} src={urlFor(services.aboutImage).url()}  alt="logoDark"/>
                        <h5 className='about-card-title mt-3'>{services.aboutTitle}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-left mt-3">{services.aboutDesc}</p>
                        <p className="about-text font-normal text-gray-700 dark:text-gray-400 text-left mt-3">{services.aboutText}</p>
                </div>
            </div>
        ))
    }
</div>
  )
}

export default AboutCard