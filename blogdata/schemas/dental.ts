import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dental',
  title: 'Dental',
  type: 'document',
  fields: [
    defineField({
        name: 'dentalHead',
        title: 'dentalHead',
        type: 'string',
      }),
      defineField({
        name: 'dentalTitle',
        title: 'dentalTitle',
        type: 'string',
      }),
      defineField({
        name: 'dentalHeadline',
        title: 'dentalHeadline',
        type: 'string'
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'dentalTitle',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'dentalDesc',
        title: 'dentalDesc',
        type: 'text',
      }),
      defineField({
        name: 'dentalImage',
        title: 'dentalImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      })
    ]
})

