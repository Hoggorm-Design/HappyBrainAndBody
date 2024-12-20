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
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
        }),
    ],
});
