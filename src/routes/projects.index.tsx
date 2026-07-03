import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { ParallaxImage } from "@/components/site/parallax-image";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Studio Dyota" },
      { name: "description", content: "Selected residential, commercial and cultural projects from Studio Dyota across India." },
      { property: "og:title", content: "Projects — Studio Dyota" },
      { property: "og:description", content: "Selected residential, commercial and cultural projects from Studio Dyota." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <SiteShell>
      <ProjectsIndex />
    </SiteShell>
  ),
});

function ProjectsIndex() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Portfolio</div>
          <SplitText
            as="h1"
            text="Selected projects."
            className="mt-6 font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.98] tracking-tight text-balance"
          />
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Homes, workplaces and civic pavilions delivered across India. Each project is designed and built by the same senior team.
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-24">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={0.05}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group grid gap-8 md:grid-cols-12 items-center">
                <div className={`md:col-span-8 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <ParallaxImage src={p.image} alt={p.name} className="aspect-[16/10] rounded-lg" strength={40} />
                </div>
                <div className={`md:col-span-4 ${i % 2 === 1 ? "md:order-1 md:pr-6" : "md:pl-6"}`}>
                  <div className="font-mono text-xs text-muted-foreground">0{i + 1} · {p.tag}</div>
                  <div className="mt-4 font-display text-3xl md:text-5xl tracking-tight">{p.name}</div>
                  <div className="mt-2 text-muted-foreground">{p.location} · {p.year}</div>
                  <div className="mt-6 flex items-center gap-3 text-sm">
                    View project
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-all group-hover:bg-[var(--navy-deep)] group-hover:text-[var(--bone)] group-hover:border-[var(--navy-deep)]">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}