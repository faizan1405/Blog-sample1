import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({ children, className, max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={cn("relative [transform-style:preserve-3d] transition-transform duration-500", className)}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1200px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(0)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "perspective(1200px) rotateY(0) rotateX(0)";
      }}
    >
      {children}
    </div>
  );
}