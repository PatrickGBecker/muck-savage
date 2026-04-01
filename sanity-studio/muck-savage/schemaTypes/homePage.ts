export const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Contemporary & Traditional Irish Music",
    },
    {
      name: "description",
      title: "What is a Muck Savage? Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "liveRecordings",
      title: "Live Recordings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Song Title", type: "string" },
            { name: "url", title: "Audio/Video URL", type: "url" },
          ],
        },
      ],
    },
  ],
};

export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "bandName",
      title: "Band Name",
      type: "string",
      initialValue: "Muck Savage",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "spotify", title: "Spotify", type: "url" },
      ],
    },
  ],
};
