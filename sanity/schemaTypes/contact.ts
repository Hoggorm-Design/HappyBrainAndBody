import { defineField, defineType } from 'sanity';

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
            name: 'website1Link',
            title: 'Website 1 Link ',
            type: 'url',
        }),
        defineField({
            name: 'website2link',
            title: 'Website 2 Link',
            type: 'url',
        }),
        defineField({
            name: 'phonenumber',
            title: 'Phonenumber',
            type: 'string',
        }),
    ],
});
