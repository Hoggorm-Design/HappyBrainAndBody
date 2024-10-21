import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'header',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'website1link',
      title: 'Website 1 link',
      type: 'string',
    }),
    defineField({
      name: 'website2link',
      title: 'Website 2 link',
      type: 'string',
    }),
    defineField({
      name: 'phonenumber',
      title: 'Phonenumber',
      type: 'string',
    }),
  ],
})
