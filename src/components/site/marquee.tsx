import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <div className="flex items-center gap-16 pr-16">{children}</div>
        <div className="flex items-center gap-16 pr-16" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}