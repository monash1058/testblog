import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aservice',
  title: 'About Service',
  type: 'document',
  fields: [
    defineField({
        name: 'aboutTitle',
        title: 'aboutTitle',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'aboutTitle',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'aboutImage',
        title: 'aboutImage',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'aboutDesc',
        title: 'aboutDesc',
        type: 'text'
      }),
      defineField({
        name: 'aboutText',
        title: 'aboutText',
        type: 'string'
      }),
    ]
})

