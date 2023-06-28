import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactdata',
  title: 'Contact Data',
  type: 'document',
  fields: [
    defineField({
      name: 'contactTitle',
      title: 'ContactTitle',
      type: 'string',
    }),
    defineField({
      name: 'cardTitle',
      title: 'cardTitle',
      type: 'string',
    }),
    defineField({
      name: 'cardText',
      title: 'cardText',
      type: 'string',
    }),
    defineField({
        name: 'cardTitle2',
        title: 'cardTitle',
        type: 'string',
      }),
      defineField({
        name: 'cardText2',
        title: 'cardText',
        type: 'string',
      }),
      defineField({
        name: 'cardTitle3',
        title: 'cardTitle',
        type: 'string',
      }),
      defineField({
        name: 'cardText3',
        title: 'cardText',
        type: 'string',
      }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
