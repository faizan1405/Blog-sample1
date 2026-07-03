import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

import { SplitText } from "@/components/site/split-text";
import { Reveal, ClipReveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { RippleButton } from "@/components/site/ripple-button";
import { TiltCard } from "@/components/site/tilt-card";
import { Counter } from "@/components/site/counter";
import { Marquee } from "@/components/site/marquee";
import { ParallaxImage } from "@/components/site/parallax-image";
import {
  AWARDS,
  IMAGES,
  PROCESS_STEPS,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  WHY_US,
  buildWhatsAppUrl,
} from "@/lib/site-data";

export function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ScrollStory />
      <ProcessTimeline />
      <ServicesPreview />
      <WhyUs />
      <Statistics />
      <FeaturedProjects />
      <Testimonials />
      <Awards />
      <CTABanner />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div
        style={{ scale, y }}
        initial={{ clipPath: "inset(6% 6% 6% 6% round 24px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        className="absolute inset-0"
      >
        <img
          src={IMAGES.heroVilla}
          alt="Luxury contemporary villa at twilight"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.04_258/0.15)] via-transparent to-[oklch(0.16_0.04_258/0.55)]" />
      </motion.div>

      {/* Floating glass panels */}
      <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-[22%] left-[6%] hidden md:block glass rounded-2xl p-4 float-slow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Currently</div>
          <div className="mt-1 font-display text-sm">Bengaluru · Vijayapura · Mysuru</div>
        </motion.div>
        <motion.div
          className="absolute bottom-[26%] right-[6%] hidden md:block glass rounded-2xl p-4 float-slow"
          style={{ animationDelay: "-3s" }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Est. 2013</div>
          <div className="mt-1 font-display text-sm">12+ yrs · 250+ projects</div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 lg:px-10 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
          style={{ color: "color-mix(in oklab, white 78%, transparent)" }}
        >
          Studio Dyota · Est. 2013
        </motion.div>

        <SplitText
          as="h1"
          text="Designing Tomorrow. Building Excellence."
          className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7.2vw,7rem)] leading-[0.98] tracking-tight text-white text-balance"
          delay={1.4}
          stagger={0.06}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-6 max-w-xl text-base md:text-lg text-white/80 text-pretty"
        >
          Studio Dyota creates timeless architecture, elegant interiors, quality construction and expert consultancy for
          residential and commercial spaces across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <Link to="/contact" className="btn-lux" style={{ background: "var(--bone)", color: "var(--navy-deep)", borderColor: "var(--bone)" }}>
              Quote Now
              <ArrowRight size={16} />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="btn-lux-outline" style={{ color: "white", borderColor: "color-mix(in oklab, white 55%, transparent)" }}>
              Contact Now
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="absolute bottom-6 right-6 md:right-10 z-10 flex items-center gap-3 text-white/70"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <span className="relative block h-8 w-[1px] bg-white/40 overflow-hidden">
          <span className="absolute top-0 left-0 h-1/2 w-full bg-white animate-[scrollDown_1.8s_ease-in-out_infinite]" />
        </span>
        <style>{`@keyframes scrollDown { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }`}</style>
      </motion.div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="eyebrow">Introduction</div>
          <div className="mt-6 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">01 / Studio</div>
          <div className="mt-24 hidden md:block h-40 w-40 rounded-full float-slow" style={{ background: "var(--gradient-navy)", filter: "blur(30px)", opacity: 0.35 }} />
        </div>
        <div className="md:col-span-8">
          <SplitText
            as="h2"
            text="A studio at the intersection of architecture, interior, construction and consultancy."
            className="font-display text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.05] tracking-tight text-balance"
          />
          <Reveal delay={0.15} className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Since 2013, Studio Dyota has delivered residential and commercial projects across India that quietly change the
            neighbourhoods they land in. We work in small, senior teams — one architect, one engineer, one project lead — so
            decisions get made where the work happens.
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <Link to="/about" className="btn-lux-outline">
              About the Studio
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ScrollStory() {
  const stages = [
    { label: "Blueprint", image: IMAGES.blueprintImg },
    { label: "Foundation", image: IMAGES.steelImg },
    { label: "Steel Structure", image: IMAGES.serviceArchitecture },
    { label: "Construction", image: IMAGES.serviceConstruction },
    { label: "Luxury Villa", image: IMAGES.serviceInterior },
    { label: "Completed Project", image: IMAGES.heroVilla },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative py-24 md:py-36" style={{ background: "var(--concrete)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow">The Arc</div>
            <SplitText
              as="h2"
              text="From a first line to a lived-in home."
              className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight max-w-3xl text-balance"
            />
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Every project we deliver moves through six stages. Scroll through the arc that turns a sketch into something built.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-6">
          {stages.map((s, i) => (
            <motion.div
              key={s.label}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [40 * (i % 2 === 0 ? 1 : -1), -40 * (i % 2 === 0 ? 1 : -1)]),
              }}
              className="group relative aspect-[3/5] overflow-hidden rounded-md"
            >
              <motion.img
                src={s.image}
                alt={s.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/85 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70">0{i + 1}</div>
                <div className="font-display text-lg text-white">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow">Process</div>
          <SplitText
            as="h2"
            text="Five stages. One senior team, from brief to keys."
            className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-balance"
          />
        </div>

        <div className="relative mt-20">
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-[1px] md:left-1/2 md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "color-mix(in oklab, var(--navy) 40%, transparent)" }}
          />
          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1 md:[&>*:last-child]:row-start-1" : ""}`}>
                  <div className="relative pl-16 md:pl-0">
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 md:left-auto ${i % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"} grid h-12 w-12 place-items-center rounded-full font-mono text-xs`} style={{ background: "var(--navy-deep)", color: "var(--bone)" }}>
                      {s.id}
                    </div>
                    <div className="font-display text-3xl md:text-5xl tracking-tight">{s.title}</div>
                  </div>
                  <p className="text-muted-foreground md:text-lg max-w-md text-pretty">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: "var(--navy-deep)", color: "var(--bone)" }}>
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>Services</div>
            <SplitText
              as="h2"
              text="Four disciplines. One studio. End-to-end."
              className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-balance"
            />
          </div>
          <Link to="/services" className="btn-lux-outline" style={{ color: "var(--bone)", borderColor: "color-mix(in oklab, var(--bone) 40%, transparent)" }}>
            All Services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <TiltCard>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-lg"
                  style={{ boxShadow: "var(--shadow-glass)" }}
                >
                  <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.14 0.04 258 / 0.85) 100%)" }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(160deg, oklch(0.62 0.14 240 / 0.25), transparent 60%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70">0{i + 1}</div>
                    <div>
                      <div className="font-display text-2xl md:text-3xl text-white">{s.title}</div>
                      <div className="mt-2 text-sm text-white/70 max-w-xs">{s.tagline}</div>
                      <div className="mt-6 flex items-center gap-2 text-sm text-white">
                        Discover <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-white/25 transition" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow">Why Studio Dyota</div>
          <SplitText
            as="h2"
            text="Six commitments we make on every single project."
            className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-balance"
          />
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <TiltCard max={4} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-lg border border-border p-8 bg-card transition-all duration-500 hover:border-[var(--navy)] hover:shadow-[var(--shadow-elegant)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), oklch(0.62 0.14 240 / 0.08), transparent 60%)" }} />
                  <div className="font-mono text-xs text-muted-foreground tracking-[0.2em]">0{i + 1}</div>
                  <div className="mt-6 font-display text-2xl tracking-tight">{w.title}</div>
                  <p className="mt-3 text-muted-foreground">{w.body}</p>
                  <div className="mt-8 hairline w-full" />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--concrete)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-border pt-6">
                <div className="font-display text-5xl md:text-6xl tracking-tight" style={{ color: "var(--navy-deep)" }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow">Featured Work</div>
            <SplitText
              as="h2"
              text="Recent projects, quietly celebrated."
              className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-balance"
            />
          </div>
          <Link to="/projects" className="btn-lux-outline">
            All Projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-6">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.06}
              className={
                i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : i === 2 ? "md:col-span-2" : "md:col-span-4"
              }
            >
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block relative overflow-hidden rounded-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ParallaxImage src={p.image} alt={p.name} className="absolute inset-0 h-full w-full" strength={40} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">{p.tag}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-xl md:text-2xl tracking-tight">{p.name}</div>
                    <div className="text-sm text-muted-foreground">{p.location} · {p.year}</div>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border transition-all group-hover:bg-[var(--navy-deep)] group-hover:text-[var(--bone)] group-hover:border-[var(--navy-deep)]">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="eyebrow">Testimonials</div>
          <SplitText
            as="h2"
            text="What our clients tell us, six months later."
            className="mt-4 font-display text-[clamp(1.75rem,4vw,3.6rem)] leading-[1.05] tracking-tight text-balance"
          />
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TiltCard max={3} className="h-full">
                <blockquote className="relative h-full overflow-hidden rounded-lg border border-border p-8 bg-card transition-all duration-500 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} size={14} className="fill-current" style={{ color: "var(--sky)" }} />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-pretty">"{t.quote}"</p>
                  <footer className="mt-8 flex items-center gap-3 border-t border-border pt-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full font-display" style={{ background: "var(--navy-deep)", color: "var(--bone)" }}>
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </footer>
                </blockquote>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="py-24" style={{ background: "var(--concrete)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow">Recognition</div>
            <SplitText
              as="h2"
              text="Awards & achievements."
              className="mt-4 font-display text-3xl md:text-5xl tracking-tight"
            />
          </div>
        </div>
        <Marquee>
          {AWARDS.concat(AWARDS).map((a, i) => (
            <div key={i} className="flex items-center gap-4 text-xl md:text-2xl font-display tracking-tight">
              <span className="font-mono text-xs text-muted-foreground">{a.year}</span>
              <span>{a.title}</span>
              <span aria-hidden className="opacity-30">/</span>
            </div>
          ))}
        </Marquee>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title + i} delay={i * 0.05}>
              <div className="border-t border-border pt-6">
                <div className="font-mono text-xs text-muted-foreground">{a.year} · {a.body}</div>
                <div className="mt-3 font-display text-xl tracking-tight text-balance">{a.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <ClipReveal className="rounded-2xl overflow-hidden">
          <div className="relative isolate rounded-2xl overflow-hidden" style={{ background: "var(--navy-deep)", color: "var(--bone)" }}>
            <ParallaxImage src={IMAGES.heroVilla} alt="" className="absolute inset-0 h-full w-full opacity-25" strength={40} />
            <div className="grain absolute inset-0" />
            <div className="relative grid gap-10 md:grid-cols-12 items-center p-10 md:p-16">
              <div className="md:col-span-8">
                <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>Ready when you are</div>
                <SplitText
                  as="h2"
                  text="Let's design a space that outlives the trend cycle."
                  className="mt-4 font-display text-[clamp(1.75rem,4.6vw,4rem)] leading-[1.02] tracking-tight text-balance"
                />
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <div className="flex flex-col gap-3">
                  <Magnetic>
                    <Link to="/contact" className="btn-lux" style={{ background: "var(--bone)", color: "var(--navy-deep)", borderColor: "var(--bone)" }}>
                      Request a Quote <ArrowRight size={16} />
                    </Link>
                  </Magnetic>
                  <a
                    href={buildWhatsAppUrl("Hello Studio Dyota, I would like to request a project quote.")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-lux-outline"
                    style={{ color: "var(--bone)", borderColor: "color-mix(in oklab, var(--bone) 40%, transparent)" }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}