import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      validation: Rule => Rule.required(),
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      validation: Rule => Rule.required(),
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "tldr",
      title: "TLDR",
      description:
        "Write a summary of the article. Using bullets points to list the main takeways could be a good idea.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      description:
        "The main Content of the blog post. Start by an introduction text (it will be used as a description).",
      type: "blockContent",
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
