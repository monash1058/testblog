// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient} from '@sanity/client'

const client = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "x1pmbuju",
    useCdn: true, 
    token: process.env.SANITY_API_TOKEN
})
export default async function createContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { _id, name, email, mobile, enquiry, message } = JSON.parse(req.body);
    try{
        await client.create({
            _type:"contact",
            // post:{
            //     _type:"reference",
            //     _ref:_id,
            // },
            _id,
            name,
            email,
            mobile,
            enquiry,
            message
        });
    } catch(err){
        return res.status(500).json({message: "Couldn't submit Contact", err})
    }
    console.log("contact submitted")
  return res.status(200).json({ name: 'Contact Form submitted successfully' })
}
