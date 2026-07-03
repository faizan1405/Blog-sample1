import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 80,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  loading?: "lazy" | "eager";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.15]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
    </div>
  );
}