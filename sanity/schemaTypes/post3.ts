import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post3',
    title: 'Post3',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
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
            name: 'body',
            title: 'Body',
            type: 'text',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
});
