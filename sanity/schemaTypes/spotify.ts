import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'spotify',
    title: 'Spotify',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description:'Here you can add the title of the post.'
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'text',
            description:'Here you can add the body of the post.'
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            description: "Here you can add the link of the spotify post.",
        }),
    ],

});