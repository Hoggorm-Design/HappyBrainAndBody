import { defineField, defineType } from "sanity";

export default defineType({
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description: "Here you can add the title of your blogpost.",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: 'Here you can add the text content of your blogpost.'
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: 'Here you can add the image of the blogpost.',
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
            name: "link",
            title: "Link",
            type: "url",
            description: "Here you can add the link of the blogpost.",
        }),
        defineField({
            name: "pdf",
            title: "PDF File",
            type: "file",
            description: "Upload a PDF file related to the blogpost.",
            options: {
                accept: ".pdf",
            },
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            description: "The date and time of your blogpost",
        }),
    ],
});
