import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
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
        name: 'aboutDesc',
        title: 'aboutDesc',
        type: 'text',
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
        name: 'aboutImage2',
        title: 'aboutImage2',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'aboutTitle2',
        title: 'aboutTitle2',
        type: 'string',
      }),
      defineField({
        name: 'aboutText',
        title: 'aboutText',
        type: 'string',
      }),
      defineField({
        name: 'aboutText2',
        title: 'aboutText2',
        type: 'string',
      }),
      defineField({
        name: 'aboutHeadline',
        title: 'aboutHeadline',
        type: 'string',
      }),
    ]
})

