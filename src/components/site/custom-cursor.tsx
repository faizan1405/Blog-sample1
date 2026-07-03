import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = matchMedia("(hover: none)").matches || matchMedia("(max-width: 1023px)").matches;
    if (isTouch) return;
    document.documentElement.classList.add("has-custom-cursor");

    const state = { x: window.innerWidth / 2, y: window.innerHeight / 2, rx: 0, ry: 0 };
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
      state.rx += (state.x - state.rx) * 0.14;
      state.ry += (state.y - state.ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.rx}px, ${state.ry}px, 0) translate(-50%, -50%) scale(${hovering ? 2.2 : 1})`;
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

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 34,
          height: 34,
          border: "1px solid oklch(0.18 0.06 255)",
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "opacity 200ms ease, background 200ms ease, border-color 200ms ease",
          opacity: visible ? 0.9 : 0,
          backgroundColor: hovering ? "oklch(0.62 0.14 240 / 0.15)" : "transparent",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          background: "oklch(0.18 0.06 255)",
          borderRadius: 999,
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
          transition: "opacity 200ms ease",
        }}
      />
    </>
  );
}