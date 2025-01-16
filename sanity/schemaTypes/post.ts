import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biography',
  title: 'Biografi',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Here you can write the title  of the biography.'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description:'Here you can add the image of the biography.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Provide a short description of the image for accessibility.",
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: "string",
      description:'Here you can add the profession of the biography.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type:  'text',
      description: 'Here you can add the text of the biography.'
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
