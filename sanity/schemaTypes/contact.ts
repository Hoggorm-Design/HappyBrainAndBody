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
            description: 'Here you can add the title of the event.'
        }),
        defineField({
            name: 'website1link',
            title: 'Website 1 Link ',
            type: 'string',
            description: 'Here you can add the first website link',
        }),
        defineField({
            name: 'website2link',
            title: 'Website 2 Link',
            type: 'string',
            description: 'Here you can add the second website link',
        }),
        defineField({
            name: 'phonenumber',
            title: 'Phonenumber',
            type: 'string',
            description: 'Here you can add your phone number.'
        }),
        defineField({
            name: 'mail',
            title: 'Mail',
            type: 'string',
            description: 'Here you can add your mail-address number.'
        }),
    ],
});
