import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax-image";
import { TiltCard } from "@/components/site/tilt-card";
import { SERVICES, PROJECTS, type Service } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Studio Dyota" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} — Studio Dyota` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} — Studio Dyota` },
        { property: "og:description", content: s.description },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    };
  },
  component: () => (
    <SiteShell>
      <ServiceDetail />
    </SiteShell>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
          <SplitText
            as="h1"
            text={service.title}
            className="mt-6 font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight"
          />
          <Reveal delay={0.2} className="mt-8 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-6 text-lg text-muted-foreground text-pretty">{service.description}</div>
            <div className="md:col-span-5 md:col-start-8 font-display text-2xl tracking-tight text-balance">{service.tagline}</div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <ParallaxImage src={service.image} alt={service.title} className="aspect-[16/9] rounded-lg" strength={80} />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">What we do</div>
          <SplitText as="h2" text="Areas of focus." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {service.subServices.map((sub, i) => (
              <Reveal key={sub.title} delay={i * 0.05}>
                <TiltCard max={4}>
                  <div className="relative rounded-lg border border-border p-8 bg-card h-full transition-shadow duration-500 hover:shadow-[var(--shadow-elegant)]">
                    <div className="flex items-start justify-between">
                      <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                      <ArrowUpRight size={16} className="text-muted-foreground" />
                    </div>
                    <div className="mt-6 font-display text-2xl tracking-tight">{sub.title}</div>
                    <p className="mt-3 text-muted-foreground">{sub.blurb}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: "var(--concrete)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">Process</div>
            <SplitText as="h2" text="How we work." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
            <div className="mt-10 space-y-2">
              {service.process.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="flex gap-6 border-t border-border pt-4">
                    <div className="font-mono text-xs text-muted-foreground w-10 shrink-0">0{i + 1}</div>
                    <div>
                      <div className="font-display text-lg tracking-tight">{p.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">Benefits</div>
            <SplitText as="h2" text="Why choose us for this." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
            <ul className="mt-10 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 border-b border-border pb-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--sky)" }} />
                  <span className="text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Gallery</div>
          <SplitText as="h2" text="Selected work." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group relative block aspect-[4/5] overflow-hidden rounded-md">
                  <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, oklch(0.14 0.04 258 / 0.8) 100%)" }} />
                  <div className="absolute inset-x-6 bottom-6 text-white">
                    <div className="font-display text-xl">{p.name}</div>
                    <div className="text-xs text-white/70">{p.location}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: "var(--concrete)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">FAQ</div>
            <SplitText as="h2" text="Questions we hear a lot." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg tracking-tight hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SplitText as="h2" text={`Ready to talk ${service.title.toLowerCase()}?`} className="font-display text-[clamp(2rem,5vw,4rem)] tracking-tight max-w-3xl text-balance" />
          <div className="flex gap-3">
            <Link to="/contact" className="btn-lux">Start a Project <ArrowRight size={16} /></Link>
            <Link to="/projects" className="btn-lux-outline">See Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}