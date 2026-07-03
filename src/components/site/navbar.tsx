import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,padding] duration-500",
          scrolled ? "glass border-b border-border/60 py-3" : "bg-transparent py-5 border-b border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Studio Dyota home">
            <img
              src={logoAsset.url}
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base tracking-tight">Studio Dyota</span>
              <span className="hidden sm:block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Architecture · Interior · Build
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="group relative text-sm tracking-wide"
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-[var(--navy-deep)] transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="btn-lux">
              Quote Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "var(--navy-deep)", color: "var(--bone)" }}
          >
            <div className="grain absolute inset-0" />
            <div className="relative flex h-full flex-col justify-between px-6 pt-28 pb-10">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={l.to} className="block font-display text-4xl tracking-tight py-2 border-b border-white/10">
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="space-y-2 text-sm text-white/70"
              >
                <div>+91 89717 26387</div>
                <div>reddyanish181@gmail.com</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}