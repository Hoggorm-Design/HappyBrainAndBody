import { defineField, defineType } from "sanity";

export default defineType({
    name: "landing",
    title: "Landing Page",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description:'Here you can add the image of the landing page.',
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
            name: "header",
            title: "Header",
            type: "string",
            description:'Here you can add the title of the landing page.',
        }),
        defineField({
            name: "introText",
            title: "Intro Text",
            type: "text",
            description:'Here you can add the first body part of the landing page.'
        }),
        defineField({
            name: "additionalText",
            title: "Additional Text",
            type: "text",
            description:'Here you can add the second body part of the landing page.',
        }),
    ],
});
