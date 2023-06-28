import React from 'react'
import { IoMdCall } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";

const ContactCard = (props:any) => {
  return (
    <div className='contact-cards-layout'>
            <div className="contact-card">
                <div className="contact-container-card">
                <div className='contact-dot-layout'>
                        <span className="contact-dot">
                            <IoMdCall className='contact-card-image'/>
                        </span>
                    </div>
                        <h5 className='contact-card-title mt-5'>{props.value[0].cardTitle}</h5>
                        <p className="contact-small font-normal text-gray-700 dark:text-gray-400 mt-3">{props.value[0].cardText}</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-container-card">
                <div className='contact-dot-layout'>
                        <span className="contact-dot1">
                            <IoIosPin className='contact-card-image'/>
                        </span>
                    </div>
                        <h5 className='contact-card-title mt-5'>{props.value[0].cardTitle2}</h5>
                        <p className="contact-small font-normal text-gray-700 dark:text-gray-400 mt-3">{props.value[0].cardText2}</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-container-card">
                <div className='contact-dot-layout'>
                        <span className="contact-dot2">
                            <IoMdHelpCircleOutline className='contact-card-image'/>
                        </span>
                    </div>
                        <h5 className='contact-card-title mt-5'>{props.value[0].cardTitle3}</h5>
                        <p className="contact-small font-normal text-gray-700 dark:text-gray-400 mt-3">{props.value[0].cardText3}</p>
                </div>
            </div>
</div>
  )
}

export default ContactCard