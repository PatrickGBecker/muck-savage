export default {
  name: "show",
  title: "Show",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "venue",
      title: "Venue",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "state",
      title: "State",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Exact date if known",
    },
  ],
  orderings: [
    {
      title: "Year Descending",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "venue",
      subtitle: "year",
    },
  },
};
