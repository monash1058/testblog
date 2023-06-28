import React from 'react'
import Image from "next/image";
import { urlFor } from "../sanity";

const CardLayout = (props: any) => {
    return (
        <div className='cards-layout'>
            {
                props.serviceData.map((services: any) => (
                    <div className="card" key={services._id}>
                        <div className="container-card">
                            <div className='dot-layout'>
                                <span className="dot">
                                <Image className='card-image' width={380} height={380} src={urlFor(services.serviceImage).url()}  alt="logoDark"/>
                                </span>
                                <h5 className='card-title'>{services.serviceTitle}</h5>
                            </div>
                            <p className='card-description text-left mt-3'>{services.description}</p>
                            {services.descriptionPoints.map((content: any) => (
                                <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left mt-4'>
                                   <li>{content.children[0].text}.</li> 
                                </ul>
                            ))}
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default CardLayout