import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post4',
    title: 'Post4',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
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
