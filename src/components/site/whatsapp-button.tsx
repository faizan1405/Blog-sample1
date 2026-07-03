import { buildWhatsAppUrl } from "@/lib/site-data";

export function WhatsAppButton() {
  const url = buildWhatsAppUrl(
    "Hello Studio Dyota, I would like to know more about your services.",
  );
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]"
      style={{ background: "#25D366" }}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{ animation: "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite", background: "#25D366", opacity: 0.5 }}
      />
      <svg viewBox="0 0 24 24" width="26" height="26" fill="white" aria-hidden>
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .19 5.31.19 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.87 11.87 0 0 0 5.66 1.44h.01c6.56 0 11.87-5.31 11.87-11.87 0-3.17-1.23-6.15-3.42-8.41ZM12.07 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.62 9.62 0 0 1-1.48-5.1c0-5.31 4.32-9.63 9.75-9.63 2.6 0 5.05 1.02 6.9 2.87a9.7 9.7 0 0 1 2.85 6.87c0 5.31-4.34 9.62-9.75 9.62Zm5.55-7.2c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.18-1.44-.07-.13-.28-.2-.58-.35Z" />
      </svg>
      <style>{`@keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.55; } 80%, 100% { transform: scale(1.9); opacity: 0; } }`}</style>
    </a>
  );
}