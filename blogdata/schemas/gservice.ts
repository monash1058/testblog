import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gservice',
  title: 'Gservice',
  type: 'document',
  fields: [
    defineField({
        name: 'serviceTitle',
        title: 'serviceTitle',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'serviceTitle',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'serviceImage',
        title: 'serviceImage',
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
      defineField({
        name: 'descriptionPoints',
        title: 'descriptionPoints',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [{title: 'Bullet', value: 'bullet'}],
          },
        ],
      }),
    ]
})

