import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteShell } from "@/components/site/site-shell";
import { SplitText } from "@/components/site/split-text";
import { Reveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { CONTACT, buildWhatsAppUrl } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio Dyota" },
      { name: "description", content: "Talk to Studio Dyota about your next architecture, interior, construction or consultancy project." },
      { property: "og:title", content: "Contact Studio Dyota" },
      { property: "og:description", content: "Talk to Studio Dyota about your next project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  ),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `New enquiry via studiodyota.com%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A%0A*Message:*%0A${form.message}`;
    window.open(`${CONTACT.whatsappBase}?text=${msg}`, "_blank", "noreferrer");
  };

  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow">Contact</div>
          <SplitText
            as="h1"
            text="Let's start with a conversation."
            className="mt-6 font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.98] tracking-tight max-w-5xl text-balance"
          />
          <Reveal delay={0.2} className="mt-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Share a few details about your project and we'll reply within one working day. For urgent requests, call or WhatsApp us directly.
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="rounded-2xl border border-border p-8 md:p-10 bg-card">
              <div className="eyebrow">Studio</div>
              <div className="mt-8 space-y-8">
                <a href={`tel:${CONTACT.phoneRaw}`} className="group flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors group-hover:bg-[var(--navy-deep)] group-hover:text-[var(--bone)]">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Phone</div>
                    <div className="mt-1 font-display text-lg">{CONTACT.phone}</div>
                  </div>
                </a>
                <a href={buildWhatsAppUrl("Hello Studio Dyota, I would like to know more.")} target="_blank" rel="noreferrer" className="group flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors group-hover:bg-[#25D366] group-hover:text-white group-hover:border-transparent">
                    <MessageCircle size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">WhatsApp</div>
                    <div className="mt-1 font-display text-lg">{CONTACT.phone}</div>
                  </div>
                </a>
                <a href={`mailto:${CONTACT.email}`} className="group flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors group-hover:bg-[var(--navy-deep)] group-hover:text-[var(--bone)]">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Email</div>
                    <div className="mt-1 font-display text-lg break-all">{CONTACT.email}</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Studio</div>
                    <div className="mt-1 text-base max-w-xs">{CONTACT.address}</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Magnetic>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="btn-lux">Call Now</a>
                </Magnetic>
                <Magnetic>
                  <a href={buildWhatsAppUrl("Hello Studio Dyota, I would like to chat.")} target="_blank" rel="noreferrer" className="btn-lux-outline">
                    WhatsApp Now
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border p-8 md:p-10 bg-card space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Name</span>
                  <input required value={form.name} onChange={set("name")} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-[var(--navy-deep)] outline-none transition-colors" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Phone</span>
                  <input required value={form.phone} onChange={set("phone")} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-[var(--navy-deep)] outline-none transition-colors" placeholder="+91 …" />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Email</span>
                <input required type="email" value={form.email} onChange={set("email")} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-[var(--navy-deep)] outline-none transition-colors" placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Message</span>
                <textarea required value={form.message} onChange={set("message")} rows={5} className="mt-2 w-full bg-transparent border-b border-border py-3 focus:border-[var(--navy-deep)] outline-none transition-colors resize-none" placeholder="Tell us about your project — scope, site, timeline." />
              </label>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-lux cursor-pointer">
                  Send via WhatsApp
                  <MessageCircle size={16} />
                </button>
                <div className="text-xs text-muted-foreground max-w-sm">
                  Submitting opens WhatsApp with your enquiry pre-filled so you can review before sending.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}