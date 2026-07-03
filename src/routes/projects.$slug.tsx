import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, MoveHorizontal } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax-image";
import { PROJECTS, IMAGES, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Studio Dyota" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.name} — Studio Dyota` },
        { name: "description", content: p.overview },
        { property: "og:title", content: `${p.name} — Studio Dyota` },
        { property: "og:description", content: p.overview },
        { property: "og:image", content: p.image },
        { property: "og:url", content: `/projects/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
    };
  },
  component: () => (
    <SiteShell>
      <ProjectDetail />
    </SiteShell>
  ),
});

function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-lg select-none"
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const p = ((e.clientX - r.left) / r.width) * 100;
        setPos(Math.max(2, Math.min(98, p)));
      }}
      onTouchMove={(e) => {
        const t = e.touches[0]; if (!t) return;
        const r = ref.current!.getBoundingClientRect();
        const p = ((t.clientX - r.left) / r.width) * 100;
        setPos(Math.max(2, Math.min(98, p)));
      }}
    >
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} loading="lazy" />
      </div>
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, width: 2, background: "var(--bone)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full text-[var(--navy-deep)]" style={{ left: `calc(${pos}% - 22px)`, background: "var(--bone)", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
        <MoveHorizontal size={16} />
      </div>
      <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">Before</div>
      <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">After</div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <>
      <section className="relative h-[80svh] overflow-hidden">
        <ParallaxImage src={project.image} alt={project.name} className="absolute inset-0 h-full w-full" strength={60} loading="eager" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.14 0.04 258 / 0.3), oklch(0.14 0.04 258 / 0.75))" }} />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-16 text-white">
          <div className="eyebrow" style={{ color: "color-mix(in oklab, white 70%, transparent)" }}>{project.tag} · {project.year}</div>
          <SplitText as="h1" text={project.name} className="mt-6 font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] tracking-tight" />
          <div className="mt-4 text-white/80">{project.location}</div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Overview</div>
          </div>
          <div className="md:col-span-8">
            <SplitText as="p" text={project.overview} className="font-display text-2xl md:text-3xl leading-[1.25] tracking-tight text-pretty" />
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--concrete)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-8 md:grid-cols-4">
          {project.highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.05}>
              <div className="border-t border-border pt-4">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">{h.label}</div>
                <div className="mt-3 font-display text-2xl tracking-tight">{h.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mt-10 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span key={s} className="rounded-full border border-border px-3 py-1 text-xs font-mono uppercase tracking-[0.2em]">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Gallery</div>
          <SplitText as="h2" text="Inside the project." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          <div className="mt-12 grid gap-4 md:grid-cols-6">
            {project.gallery.map((img, i) => (
              <Reveal
                key={img + i}
                delay={i * 0.05}
                className={i === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"}
              >
                <ParallaxImage src={img} alt={`${project.name} — ${i + 1}`} className={i === 0 ? "aspect-[4/5] rounded-lg" : "aspect-[4/3] rounded-lg"} strength={30} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ background: "var(--concrete)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Before / After</div>
          <SplitText as="h2" text="Site to structure." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          <div className="mt-12">
            <BeforeAfter before={IMAGES.blueprintImg} after={project.image} />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Highlights</div>
          <SplitText as="h2" text="What made this project." className="mt-4 font-display text-3xl md:text-5xl tracking-tight" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Site-first design",
              "Custom-detailed joinery",
              "Passive climate strategy",
              "Delivered on schedule",
              "Under-budget on materials",
              "Signed off with zero snag list",
            ].map((h, i) => (
              <Reveal key={h} delay={i * 0.04}>
                <div className="rounded-lg border border-border p-6 bg-card">
                  <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                  <div className="mt-4 font-display text-lg tracking-tight">{h}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="eyebrow">Next Project</div>
            <Link to="/projects/$slug" params={{ slug: next.slug }} className="mt-4 block group">
              <SplitText as="h2" text={next.name} className="font-display text-[clamp(2rem,6vw,5rem)] tracking-tight" />
              <div className="mt-2 text-muted-foreground">{next.tag} · {next.location}</div>
            </Link>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn-lux">Start Your Project <ArrowRight size={16} /></Link>
            <Link to="/projects" className="btn-lux-outline">All Projects <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}