import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post3',
    title: 'Hovedinnlegg_2',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description:'Here you can add the title of the post.'
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description:'Here you can add the main image of the post.'
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
            description:'Here you can add the body of the post.'
        }),
    ],

    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        },
    },
});
