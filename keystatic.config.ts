import { config, collection, fields } from "@keystatic/core";

export const showAdminUI = process.env.NODE_ENV === "development"

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        // keywords: fields.array(fields.text({ label: "keyword" }), {
        //   label: "Keyword",
        //   itemLabel: (props) => props.value,
        // }),
        content: fields.markdoc({ label: "Content", options: {
          image: {
            directory: "public/",
            publicPath: '/'
          }
        } }),
      },
    }),
  },
});
