import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-20", align === "center" ? "text-center" : "text-left", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "h-1.5 w-24 bg-primary mt-6 rounded-full",
          align === "center" ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  );
}
