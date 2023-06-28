import React from 'react'
import Image from "next/image";
import { urlFor } from "../sanity";

const DentalCard = (props:any) => {
  return (
    <div className='dental-cards-layout'>
    {
        props.service.map((services: any) => (
            <div className="dental-card" key={services._id}>
                <div className="dental-container-card">
                    <div className='dental-dot-layout'>
                        <span className="dental-dot">
                        <Image className='dental-card-image' width={380} height={380} src={urlFor(services.dentalImage).url()}  alt="logoDark"/>
                        </span>
                        <h5 className='dental-card-title'>{services.dentalTitle}</h5>
                    </div>
                   
                        <p className="font-normal text-gray-700 dark:text-gray-400 text-left mt-3">
                        {services.description}
                        </p>
                </div>
            </div>

        ))
    }
</div>
  )
}

export default DentalCard