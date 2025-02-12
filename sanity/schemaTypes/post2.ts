import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'post',
    title: 'Hovedinnlegg_1',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description:'Here you can add the title of the post',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description:'Here you can add the image of the post.',
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
            description:'Here you can add the body of the post.',
        }),
    ],

})
