import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dservice',
  title: 'Dental Service',
  type: 'document',
  fields: [
    defineField({
        name: 'dentalTitle',
        title: 'dentalTitle',
        type: 'string',
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
        name: 'dentalImage',
        title: 'dentalImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'text'
      }),
    ]
})

