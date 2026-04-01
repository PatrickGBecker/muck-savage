import Image from "next/image";
import { client, membersQuery, urlFor } from "@/lib/sanity";
import { members as staticMembers, honoraryMembers } from "@/lib/data";

export const metadata = {
  title: "About – Muck Savage",
  description: "Meet the members of Muck Savage.",
};

function MemberCard({
  member,
  index,
}: {
  member: any;
  index: number;
}) {
  const isEven = index % 2 === 0;

  const photoUrl = member.photo
    ? urlFor(member.photo).width(640).height(854).quality(80).url()
    : null;

  return (
    <article
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-8 md:gap-12 items-center`}
    >
      {/* Photo */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="relative aspect-[3/4] max-w-[320px] mx-auto overflow-hidden group">
          <div className="absolute inset-0 border border-copper/20 group-hover:border-copper/40 transition-colors duration-500 z-10" />
          <div
            className={`absolute ${
              isEven ? "-right-2 -bottom-2" : "-left-2 -bottom-2"
            } w-full h-full border border-copper/10`}
          />

          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-peat-900/80 to-ink-light flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center">
                  <span className="font-accent text-2xl text-copper/60">
                    {member.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </span>
                </div>
                <p className="text-xs text-cream/30 tracking-wider uppercase">
                  Photo
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="font-accent text-2xl md:text-3xl tracking-[0.1em] uppercase text-cream mb-2">
          {member.name}
        </h2>

        <p className="font-display text-sm md:text-base text-copper italic tracking-wider mb-6">
          {member.instruments}
        </p>

        <div className="section-divider md:mx-0 md:ml-0 mb-6" />

        <p className="font-body text-sm md:text-base leading-relaxed text-cream/65">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

export default async function AboutPage() {
  const members = await client.fetch(membersQuery).catch(() => null);
  const memberList = members?.length ? members : staticMembers;

  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-accent text-3xl md:text-5xl tracking-[0.2em] uppercase text-cream mb-4">
            Meet Muck Savage
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-32">
          {memberList.map((member: any, i: number) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-peat-800/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-sm md:text-base leading-relaxed text-cream/40 italic">
            {honoraryMembers}
          </p>
        </div>
      </section>
    </>
  );
}
