import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax-image";
import { TiltCard } from "@/components/site/tilt-card";
import { AWARDS, IMAGES, TEAM } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Studio Dyota — A multidisciplinary design & build studio" },
      { name: "description", content: "Founded in 2013, Studio Dyota is a multidisciplinary design and construction firm delivering residential and commercial projects across India." },
      { property: "og:title", content: "About Studio Dyota" },
      { property: "og:description", content: "Founded in 2013, Studio Dyota is a multidisciplinary design and construction firm across India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  ),
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">About</div>
          <SplitText
            as="h1"
            text="Twelve years of building things that stay."
            className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-tight max-w-5xl text-balance"
          />
          <Reveal delay={0.2} className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-7 text-lg text-muted-foreground text-pretty">
              Founded in 2013, Studio Dyota has grown into a multidisciplinary design and construction firm delivering innovative
              residential and commercial projects across India. Our philosophy blends creativity, engineering excellence, and
              sustainable practices to build spaces that inspire.
            </p>
            <div className="md:col-span-4 md:col-start-9 border-t border-border pt-4 text-sm text-muted-foreground">
              <div className="grid grid-cols-2 gap-6">
                <div><div className="font-display text-3xl text-foreground">2013</div>Founded</div>
                <div><div className="font-display text-3xl text-foreground">18+</div>Cities Served</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ParallaxImage src={IMAGES.heroVilla} alt="Studio Dyota project" className="aspect-[16/9] rounded-lg" strength={80} />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-12 md:grid-cols-3">
          {[
            { title: "Mission", text: "To deliver enduring design and construction that raises the standard for how people live and work in India." },
            { title: "Vision", text: "A studio whose projects are remembered for their generosity — of light, space, and craft." },
            { title: "Core Values", text: "Craft over cleverness. Transparency over promises. Longevity over trend." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <TiltCard max={4}>
                <div className="rounded-lg border border-border p-8 h-full bg-card">
                  <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                  <div className="mt-6 font-display text-2xl tracking-tight">{c.title}</div>
                  <p className="mt-3 text-muted-foreground text-pretty">{c.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: "var(--concrete)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">The Team</div>
          <SplitText as="h2" text="A small studio, run by senior people." className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight max-w-3xl text-balance" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <TiltCard max={5}>
                  <div className="group relative rounded-lg overflow-hidden border border-border bg-card">
                    <div className="aspect-[4/5] relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--navy-deep), var(--sky))" }}>
                      <div className="grain absolute inset-0 opacity-40" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="font-display text-7xl md:text-8xl text-white/85">{m.initials}</div>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.14 0.04 258 / 0.65) 100%)" }} />
                    </div>
                    <div className="p-5">
                      <div className="font-display text-lg">{m.name}</div>
                      <div className="text-sm text-muted-foreground">{m.role}</div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">Partners</div>
            <SplitText as="h2" text="The people we build with." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
            <p className="mt-6 text-muted-foreground max-w-md">We collaborate with a curated network of structural engineers, MEP consultants, landscape architects and craftspeople — many of whom we have worked with for over a decade.</p>
          </div>
          <div>
            <div className="eyebrow">Achievements</div>
            <SplitText as="h2" text="Notable recognition." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
            <ul className="mt-8 space-y-4">
              {AWARDS.map((a) => (
                <li key={a.title} className="flex items-baseline gap-4 border-b border-border pb-3">
                  <span className="font-mono text-xs text-muted-foreground w-12 shrink-0">{a.year}</span>
                  <span className="font-display text-lg">{a.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-16">
          <Link to="/projects" className="btn-lux">See Our Work <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}