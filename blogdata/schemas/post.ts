import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerTitle',
      title: 'BannerTitle',
      type: 'string',
    }),
    defineField({
      name: 'bannerPara',
      title: 'bannerPara',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'bannerTitle',
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'bannerText',
      title: 'BannerText',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'clinicTitle',
        title: 'ClinicTitle',
        type: 'string',
    }),
    defineField({
      name: 'discoverService',
        title: 'DiscoverService',
        type: 'string',
    }),
    defineField({
      name: 'gsHeading',
        title: 'gsHeading',
        type: 'string',
    }),
    defineField({
      name: 'gsDesc',
        title: 'gsDesc',
        type: 'string',
    }),
    defineField({
      name: 'gsText',
        title: 'gsText',
        type: 'string',
    }),
    defineField({
      name: "gsimage",
      title: "gsImage",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dsHeading',
        title: 'dsHeading',
        type: 'string',
    }),

    defineField({
      name: 'dsDesc',
        title: 'dsDesc',
        type: 'string',
    }),

    defineField({
      name: 'dsText',
      title: 'dsText',
      type: 'string',
    }),

    defineField({
      name: "dsimage",
      title: "dsImage",
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'locationText',
      title: 'locationText',
      type: 'string',
    }),
    defineField({
      name: 'locationTitle',
      title: 'locationTitle',
      type: 'string',
    }),
    defineField({
      name: 'locationPara',
      title: 'locationPara',
      type: 'string',
    }),
    defineField({
      name: 'destination',
      title: 'destination',
      type: 'url',
    }),

    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),

    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
