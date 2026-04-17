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
      name: "heroImageMobile",
      title: "Hero Image (Mobile)",
      type: "image",
      options: { hotspot: true },
      description: "Alternate hero image optimized for mobile/portrait screens.",
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
            { name: "url", title: "SoundCloud URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "video",
      title: "Featured Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      description: "Upload a short video to display below the Live Recordings section.",
    },
    {
      name: "videoTitle",
      title: "Video Section Title",
      type: "string",
      initialValue: "Watch Us Play",
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
      title: "Logo (Navbar)",
      type: "image",
      description: "Appears next to the band name in the navigation bar.",
    },
    {
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      description: "Appears below the band name in the footer.",
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Browser tab icon. If empty, the navbar logo will be used.",
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
