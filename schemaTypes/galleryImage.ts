export default {
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional description of the photo.",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      description: "Year the photo was taken.",
    },
    {
      name: "venue",
      title: "Venue / Event",
      type: "string",
      description: "Where the photo was taken.",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Year Descending",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "venue",
      media: "image",
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title: title || "Untitled Photo",
        subtitle: subtitle || "",
        media,
      };
    },
  },
};
