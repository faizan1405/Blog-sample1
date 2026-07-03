import { motion, type Variants } from "framer-motion";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};

const child: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function SplitText({ text, as: Tag = "h2", className, delay = 0, stagger = 0.045 }: Props) {
  const words = text.split(" ");
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={container}
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, wi) => (
        <span key={wi} className="inline-block overflow-hidden pb-[0.15em] leading-[1.05] mr-[0.28em]">
          <motion.span variants={child} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}