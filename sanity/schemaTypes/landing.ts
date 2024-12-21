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
        }),
        defineField({
            name: "introText",
            title: "Intro Text",
            type: "text",
        }),
        defineField({
            name: "additionalText",
            title: "Additional Text",
            type: "text",
        }),
    ],
});
