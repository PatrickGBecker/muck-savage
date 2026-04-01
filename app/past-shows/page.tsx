import { shows } from "@/lib/data";

export const metadata = {
  title: "Past Shows – Muck Savage",
  description: "A history of Muck Savage performances across Colorado and Missouri.",
};

export default function PastShowsPage() {
  // Group shows by year
  const showsByYear: Record<number, typeof shows> = {};
  shows.forEach((show) => {
    if (!showsByYear[show.year]) showsByYear[show.year] = [];
    showsByYear[show.year].push(show);
  });

  const years = Object.keys(showsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      {/* Page Header */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-accent text-3xl md:text-5xl tracking-[0.2em] uppercase text-cream mb-4">
            Past Shows
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Shows Timeline */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-copper/30 via-copper/15 to-transparent" />

            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} className="relative">
                  {/* Year marker */}
                  <div className="flex items-center gap-4 md:gap-6 mb-8">
                    <div className="relative z-10 w-9 h-9 md:w-[68px] md:h-9 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-copper/80 ring-4 ring-ink ring-offset-0" />
                    </div>
                    <h2 className="font-accent text-xl md:text-2xl tracking-[0.2em] text-copper">
                      {year}
                    </h2>
                  </div>

                  {/* Shows for this year */}
                  <div className="space-y-3 pl-12 md:pl-20">
                    {showsByYear[year].map((show, i) => (
                      <div
                        key={`${show.venue}-${i}`}
                        className="group py-4 px-5 border border-peat-800/15 hover:border-copper/25 bg-ink-light/20 hover:bg-ink-light/40 transition-all duration-400"
                      >
                        <h3 className="font-display text-base md:text-lg text-cream/80 group-hover:text-cream italic transition-colors">
                          {show.venue}
                        </h3>
                        <p className="text-xs md:text-sm text-cream/40 tracking-wider mt-1">
                          {show.city}, {show.state}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
