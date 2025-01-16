import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'event',
    title: 'Eksempler',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description:'Here you can add the title of the event.'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:'This is a mandatory key. Do not edit or remove.',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'text',
            description:'Here you can add the body of the event.'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            description:'Here you can add the image of the event.',
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
            name: 'link',
            title: 'Link',
            type: 'url',
            description:'Here you can add the link of the event.',
        }),
    ],
});
