import { defineField, defineType } from "sanity";

export default defineType({
    name: "blogPage",
    title: "Blog Page",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
            description: "Here you can add the title of your blog-page.",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: 'Here you can add the text content of your blog page.'
        }),
    ],
});
