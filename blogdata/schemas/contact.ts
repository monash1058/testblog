import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Form',
  type: 'document',
  fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'mobile',
        title: 'Mobile',
        type: 'string',
      }),
      defineField({
        name: 'enquiry',
        title: 'Enquiry',
        type: 'string',
      }),
      defineField({
        name: 'message',
        title: 'Message',
        type: 'string',
      }),
    ]
})

