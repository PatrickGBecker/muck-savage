import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// ─── GROQ Queries ────────────────────────────────────────────────
export const homePageQuery = `*[_type == "homePage"][0]{
  heroImage,
  tagline,
  description,
  liveRecordings[]{
    title,
    url
  }
}`;

export const membersQuery = `*[_type == "member"] | order(order asc){
  name,
  instruments,
  photo,
  bio,
  slug
}`;

export const showsQuery = `*[_type == "show"] | order(year desc, date desc){
  year,
  venue,
  city,
  state
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  bandName,
  logo,
  footerLogo,
  socialLinks
}`;
