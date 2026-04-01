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

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-light/80 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,125,58,0.08)_0%,_transparent_70%)]" />

        {/* Hero image overlay — replace src with your own hero photo */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <div className="animate-fade-up">
            <CelticKnot className="w-24 h-6 mx-auto text-copper/60 mb-8" />

            <h1 className="font-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase text-cream text-shadow-warm mb-6">
              Muck
              <br />
              Savage
            </h1>

            <div className="section-divider mb-6" />

            <p className="font-display text-lg md:text-xl text-copper/90 italic tracking-wide">
              [ Contemporary &amp; Traditional Irish Music ]
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
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

          <div className="space-y-6">
            {liveRecordings.map((recording, i) => (
              <div
                key={i}
                className="group flex items-center gap-6 py-5 px-6 border border-peat-800/20 hover:border-copper/30 bg-ink-light/30 hover:bg-ink-light/60 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Play icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-copper/40 group-hover:border-copper group-hover:bg-copper/10 flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-copper/70 group-hover:text-copper ml-0.5 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl text-cream/80 group-hover:text-cream italic tracking-wide transition-colors">
                  {recording.title}
                </h3>

                {/* Decorative line */}
                <div className="flex-1 hidden sm:block">
                  <div className="h-[1px] bg-gradient-to-r from-peat-800/30 to-transparent group-hover:from-copper/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            {muckSavageDescription.map((paragraph, i) => (
              <p
                key={i}
                className="font-display text-base md:text-lg leading-relaxed text-cream/70 italic"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
