import { client, galleryQuery, urlFor } from "@/lib/sanity";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Gallery – Muck Savage",
  description: "Photos from Muck Savage shows throughout the years.",
};

export default async function GalleryPage() {
  const images = await client.fetch(galleryQuery).catch(() => null);

  const photos = (images || []).map((item: any) => ({
    url: urlFor(item.image).width(1600).quality(85).url(),
    thumbUrl: urlFor(item.image).width(500).height(500).quality(75).url(),
    caption: item.caption || "",
    year: item.year || null,
    venue: item.venue || "",
  }));

  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-accent text-3xl md:text-5xl tracking-[0.2em] uppercase text-cream mb-4">
            "More than just a Memory" Gallery
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          {photos.length > 0 ? (
            <GalleryClient photos={photos} />
          ) : (
            <p className="text-center text-cream/40 font-display italic text-lg">
              Photos coming soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
