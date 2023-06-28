import React, {useState} from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Submit')
    const [submitted, setsubmitted] = useState(false)
    const onSubmit = (e:any) => {
      e.preventDefault()
      const { name, email, mobile,enquiry, message } = e.target.elements
      let conFom = {
        _id: "id" + Math.random().toString(16).slice(2),
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        enquiry: enquiry.value,
        message: message.value,
      }
      setTimeout(() => {
        setFormStatus('Submitting...')
      }, 2000);
      fetch("/api/createContact", {
        method: "POST",
        body: JSON.stringify(conFom),
      }).then (()=>{
        setsubmitted(true);
          setTimeout(() => {
            let conFom = {
                name: name.value = '',
                email: email.value = '',
                mobile: mobile.value = '',
                enquiry: enquiry.value = '',
                message: message.value = '',
            }
            setFormStatus('Submit')
          }, 2000);
      }).catch((err)=> {
        setsubmitted(false);
      })
    }
  return (
    <div className="contact-layout mt-5">
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form className="flex max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <div className="mb-2 block text-left"> 
        <Label htmlFor="name" value="Full Name"  /></div>
        <TextInput
         className='contact-input'
          id="name"
          placeholder="Enter Your Full Name"
          required
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block text-left"> 
        <Label htmlFor="email" value="Email Address"  /></div>
        <TextInput
        className='contact-input'
          id="email"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block text-left"> 
        <Label htmlFor="mobile" value="Mobile Number"  /></div>
        <TextInput
         className='contact-input'
          id="mobile"
          placeholder="Enter Your Number"
          required
          type="number"
        />
      </div>
      <div>
        <div className="mb-2 block text-left"> 
        <Label htmlFor="enquiry" value="Type of Enquiry"  /></div>
        <TextInput
         className='contact-input'
          id="enquiry"
          placeholder="Enter Your Queries"
          required
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block text-left"> 
        <Label htmlFor="message" value="Message"  /></div>
        <TextInput
         className='contact-input'
          id="message"
          placeholder="Enter Your Message"
          required
          type="text"
        />
      </div>
      <Button type="submit" className='contact-button'>
      {formStatus}
      </Button>
    </form>
    </div>
  )
}

export default ContactForm