import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
        name: 'generalHead',
        title: 'generalHead',
        type: 'string',
      }),
      defineField({
        name: 'generalTitle',
        title: 'generalTitle',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'generalTitle',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'generalDesc',
        title: 'generalDesc',
        type: 'text',
      }),
      defineField({
        name: 'genralImage',
        title: 'genralImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      })
    ]
})

