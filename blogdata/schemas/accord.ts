import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'accord',
  title: 'Accord',
  type: 'document',
  fields: [
    defineField({
        name: 'accordianTitle',
        title: 'accordianTitle',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'accordianTitle',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'accordianAddress',
        title: 'accordianAddress',
        type: 'string',
      }),
      defineField({
        name: 'accordianTime',
        title: 'accordianTime',
        type: 'string',
      }),
      defineField({
        name: 'accordianTime2',
        title: 'accordianTime2',
        type: 'string',
      }),
      defineField({
        name: 'accordianText',
        title: 'accordianText',
        type: 'string',
      }),
      defineField({
        name: 'accordianMobile',
        title: 'accordianMobile',
        type: 'string',
      })
    ]
})

