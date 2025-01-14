import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description:'Here you can add the title of the page.'
        }),
    ],
});