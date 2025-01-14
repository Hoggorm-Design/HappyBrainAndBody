import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'imageByContact',
    title: 'Image By Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description:'Here you can add the image of the bottom of the page.',
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            description: "Provide a short description of the image for accessibility.",
        }),

    ],

})
