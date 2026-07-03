import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  children: ReactNode;
};

export const RippleButton = forwardRef<HTMLButtonElement, Props>(function RippleButton(
  { children, className, variant = "solid", onClick, ...rest },
  ref,
) {
  const localRef = useRef<HTMLButtonElement>(null);
  const merged = (node: HTMLButtonElement) => {
    localRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = localRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const span = document.createElement("span");
      const size = Math.max(rect.width, rect.height) * 0.6;
      span.className = "ripple-el";
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.left = `${e.clientX - rect.left - size / 2}px`;
      span.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(span);
      setTimeout(() => span.remove(), 800);
    }
    onClick?.(e);
  };
  return (
    <button
      ref={merged}
      onClick={handleClick}
      className={cn("relative isolate cursor-pointer", variant === "solid" ? "btn-lux" : "btn-lux-outline", className)}
      {...rest}
    >
      {children}
    </button>
  );
});