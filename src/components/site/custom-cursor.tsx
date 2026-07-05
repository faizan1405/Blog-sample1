import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = matchMedia("(hover: none)").matches || matchMedia("(max-width: 1023px)").matches;
    if (isTouch) return;
    document.documentElement.classList.add("has-custom-cursor");

    const state = { x: window.innerWidth / 2, y: window.innerHeight / 2, rx: 0, ry: 0, gx: 0, gy: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      state.x = e.clientX;
      state.y = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%)`;
      }
    };
    const loop = () => {
      const follow = hovering ? 0.18 : 0.12;
      state.rx += (state.x - state.rx) * follow;
      state.ry += (state.y - state.ry) * follow;
      state.gx += (state.x - state.gx) * 0.08;
      state.gy += (state.y - state.gy) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${state.gx}px, ${state.gy}px, 0) translate(-50%, -50%) scale(${hovering ? 1.5 : 1})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor='hover'], input, textarea, select, label");
      setHovering(!!interactive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [hovering, visible]);

  const scale = hovering ? 1.5 : 1;

  return (
    <>
      {/* Outer soft glow halo */}
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 48,
          height: 48,
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? (hovering ? 0.35 : 0.22) : 0,
          background: "radial-gradient(circle, oklch(0.62 0.14 240 / 0.45) 0%, oklch(0.62 0.14 240 / 0) 70%)",
          transition: "opacity 300ms ease",
          willChange: "transform",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: "2px solid oklch(0.62 0.14 240 / 0.85)",
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 0.9 : 0,
          backgroundColor: hovering ? "oklch(0.62 0.14 240 / 0.12)" : "transparent",
          boxShadow: hovering
            ? "0 0 18px oklch(0.62 0.14 240 / 0.55), 0 0 40px oklch(0.62 0.14 240 / 0.25)"
            : "0 0 12px oklch(0.62 0.14 240 / 0.35), 0 0 28px oklch(0.62 0.14 240 / 0.15)",
          transition: "opacity 200ms ease, background-color 300ms ease, box-shadow 300ms ease",
          willChange: "transform",
        }}
      />
      {/* Core dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          background: "oklch(0.985 0.005 240)",
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 10000,
          opacity: visible ? 1 : 0,
          boxShadow: hovering
            ? `0 0 10px oklch(0.62 0.14 240 / 0.9), 0 0 24px oklch(0.62 0.14 240 / 0.6), 0 0 0 ${scale * 14}px oklch(0.62 0.14 240 / 0.15)`
            : "0 0 8px oklch(0.62 0.14 240 / 0.7), 0 0 18px oklch(0.62 0.14 240 / 0.4)",
          transition: "opacity 200ms ease, box-shadow 300ms ease",
          transform: `scale(${scale})`,
          willChange: "transform",
        }}
      />
    </>
  );
}
