import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "i4469zmy",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Get the file URL for uploaded assets (videos, etc.)
export function fileUrl(ref: string) {
  const [, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/i4469zmy/production/${id}.${extension}`;
}

// ─── GROQ Queries ────────────────────────────────────────────────
export const homePageQuery = `*[_type == "homePage"][0]{
  heroImage,
  tagline,
  description,
  liveRecordings[]{
    title,
    url
  },
  "videoUrl": video.asset->url,
  videoTitle
}`;

export const membersQuery = `*[_type == "member"] | order(order asc){
  name,
  instruments,
  photo,
  bio
}`;

export const showsQuery = `*[_type == "show"] | order(year desc){
  year,
  venue,
  city,
  state
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  bandName,
  logo,
  footerLogo,
  favicon,
  socialLinks
}`;
