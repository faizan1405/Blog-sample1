import { Link } from "@tanstack/react-router";
import { CONTACT, SERVICES } from "@/lib/site-data";
import { SplitText } from "./split-text";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden" style={{ background: "var(--navy-deep)", color: "var(--bone)" }}>
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 pb-10">
        <div className="max-w-5xl">
          <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>
            Final Word
          </div>
          <SplitText
            as="h2"
            text="Let's build something extraordinary."
            className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-tight text-balance"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-lux" style={{ background: "var(--sky)", borderColor: "var(--sky)" }}>
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn-lux-outline" style={{ color: "var(--bone)", borderColor: "color-mix(in oklab, var(--bone) 40%, transparent)" }}>
              Call {CONTACT.phone}
            </a>
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/favicon.png" alt="" className="h-9 w-9 object-contain" />
              <div>
                <div className="font-display text-lg">Studio Dyota</div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">Since 2013</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 max-w-xs">
              A multidisciplinary design and construction studio, working across India from Vijayapura.
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>Explore</div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>Services</div>
            <ul className="mt-6 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="text-white/70 hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--bone) 60%, transparent)" }}>Contact</div>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li><a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white break-all">{CONTACT.email}</a></li>
              <li className="max-w-xs">{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/50 border-t border-white/10 pt-6">
          <div>© {new Date().getFullYear()} Studio Dyota. All rights reserved.</div>
          <div className="font-mono uppercase tracking-[0.2em]">Designing tomorrow. Building excellence.</div>
        </div>
      </div>
    </footer>
  );
}