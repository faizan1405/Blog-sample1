import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { TiltCard } from "@/components/site/tilt-card";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Interior, Construction & Consultancy | Studio Dyota" },
      { name: "description", content: "End-to-end services from architecture and interior design to construction and independent consultancy for residential and commercial projects." },
      { property: "og:title", content: "Services — Studio Dyota" },
      { property: "og:description", content: "Architecture, Interior, Construction, and Consultancy — one senior studio, end-to-end." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <SiteShell>
      <ServicesIndex />
    </SiteShell>
  ),
});

function ServicesIndex() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Services</div>
          <SplitText
            as="h1"
            text="Four disciplines under one roof."
            className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-tight max-w-5xl text-balance"
          />
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            You can hire us for a single service or all four. Either way, you get the same senior team, the same weekly reports, and the same standard of finish.
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <TiltCard max={6}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group relative block aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-lg">
                  <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.14 0.04 258 / 0.85) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-white">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70">0{i + 1} / Service</div>
                    <div className="mt-4 font-display text-3xl md:text-5xl tracking-tight">{s.title}</div>
                    <div className="mt-3 max-w-md text-white/80">{s.tagline}</div>
                    <div className="mt-6 flex items-center gap-2 text-sm">
                      Explore {s.title} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}