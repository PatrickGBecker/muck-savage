import { client, homePageQuery, siteSettingsQuery, urlFor } from "@/lib/sanity";
import { liveRecordings, muckSavageDescription } from "@/lib/data";


function CelticKnot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10 Q70 20 80 10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M0 10 Q10 20 20 10 Q30 0 40 10 Q50 20 60 10 Q70 0 80 10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}

function getSoundCloudEmbedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23c77d3a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
}

export default async function HomePage() {
  const homePage = await client.fetch(homePageQuery).catch(() => null);
  const settings = await client.fetch(siteSettingsQuery).catch(() => null);
  const logoUrl = settings?.logo ? urlFor(settings.logo).height(120).url() : null;

  const recordings = homePage?.liveRecordings?.length
    ? homePage.liveRecordings
    : liveRecordings;

  const description = homePage?.description?.length
    ? null
    : muckSavageDescription;

  const heroImageUrl = homePage?.heroImage
    ? urlFor(homePage.heroImage).width(1920).quality(80).url()
    : "/images/hero.jpg";

  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/80 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,125,58,0.08)_0%,_transparent_70%)]" />

        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="animate-fade-up">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="Muck Savage"
                className="h-20 md:h-28 w-auto mx-auto mb-8 opacity-80"
              />
            ) : (
              <CelticKnot className="w-24 h-6 mx-auto text-copper/60 mb-8" />
            )}
            <h1 className="font-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-cream text-shadow-warm mb-6">
              Muck
              <br />
              Savage
            </h1>

            <div className="section-divider mb-6" />

            <p className="font-display text-lg md:text-xl text-copper/90 italic tracking-wide">
              {homePage?.tagline || "[ Contemporary & Traditional Irish Music ]"}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-copper/60 to-transparent" />
        </div>
      </section>

      {/* ─── Live Recordings ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(199,125,58,0.04)_0%,_transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-accent text-2xl md:text-3xl tracking-[0.2em] uppercase text-center text-cream mb-4">
            Live Recordings
          </h2>
          <div className="section-divider mb-16" />

          <div className="space-y-8">
            {recordings.map((recording: any, i: number) => (
              <div
                key={i}
                className="group py-5 px-6 border border-peat-800/20 hover:border-copper/30 bg-ink-light/30 hover:bg-ink-light/60 transition-all duration-500"
              >
                <h3 className="font-display text-lg md:text-xl text-cream/80 group-hover:text-cream italic tracking-wide mb-4">
                  {recording.title}
                </h3>

                {recording.url && (
                  <div className="w-full">
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={getSoundCloudEmbedUrl(recording.url)}
                      className="rounded opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Video ───────────────────────────────────────── */}
      {homePage?.videoUrl && (
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-light/20 to-transparent" />

          <div className="relative max-w-4xl mx-auto px-6">
            <CelticKnot className="w-16 h-4 mx-auto text-copper/40 mb-6" />
            <h2 className="font-accent text-2xl md:text-3xl tracking-[0.2em] uppercase text-center text-cream mb-4">
              {homePage.videoTitle || "Watch Us Play"}
            </h2>
            <div className="section-divider mb-12" />

            <div className="relative border border-copper/20 bg-ink-light/30 overflow-hidden">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video"
                poster={heroImageUrl}
              >
                <source src={homePage.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* ─── What is a Muck Savage? ───────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-peat-950/30 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <CelticKnot className="w-16 h-4 mx-auto text-copper/40 mb-6" />
            <h2 className="font-accent text-sm md:text-base tracking-[0.3em] uppercase text-copper/70 mb-2">
              What is a
            </h2>
            <p className="font-accent text-3xl md:text-4xl tracking-[0.15em] uppercase text-cream">
              Muck Savage?
            </p>
          </div>

          <div className="space-y-6 border-l-2 border-copper/20 pl-8 md:pl-12">
            {(description || muckSavageDescription).map(
              (paragraph: string, i: number) => (
                <p
                  key={i}
                  className="font-display text-base md:text-lg leading-relaxed text-cream/70 italic"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
