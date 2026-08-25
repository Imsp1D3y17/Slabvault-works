import Link from "next/link";
import { Gem } from "lucide-react";
import { GradeBadge } from "./GradeBadge";
import { RareFlag } from "./RareFlag";

/**
 * Slab / card display — Brand Kit section 4.
 *
 * Non-negotiable: every slab card carries the label plate beneath the
 * image (name, grader · grade · label in mono, cert number in mono).
 * Without it a slab reads as a stock photo, not a vaulted asset.
 */

function isGemMint(grade: number | string): boolean {
  const numeric = typeof grade === "number" ? grade : parseFloat(grade);
  return !Number.isNaN(numeric) && numeric >= 9.5;
}

interface SlabCardProps {
  name: string;
  grader: string;
  grade: number | string;
  gradeLabel?: string;
  certNumber: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Population-1 or other rare variant — shows the magenta outline flag. */
  populationOne?: boolean;
  /** Forces the gold "prestige" spotlight/shadow even below a 9.5 grade. */
  featured?: boolean;
  href?: string;
  className?: string;
}

export function SlabCard({
  name,
  grader,
  grade,
  gradeLabel,
  certNumber,
  imageSrc,
  imageAlt,
  populationOne = false,
  featured = false,
  href,
  className = "",
}: SlabCardProps) {
  const gold = featured || isGemMint(grade);

  const card = (
    <div className={["group", className].join(" ")}>
      <div className="relative">
        {/* Spotlight glow behind the slab — a single trained light, not a sticker glow */}
        <div
          aria-hidden
          className={[
            "pointer-events-none absolute inset-6 -z-10 rounded-slab blur-[80px]",
            "opacity-10 transition-opacity duration-600 ease-vault group-hover:opacity-[0.18]",
            gold ? "bg-accent-gold" : "bg-accent-cyan",
          ].join(" ")}
        />

        <div
          className={[
            "aspect-slab rounded-slab border border-border-hairline bg-surface-card p-4",
            "transition-all duration-400 ease-vault",
            "group-hover:scale-[1.02] group-hover:border-accent-cyan/40",
            gold
              ? "shadow-glow-gold-sm group-hover:shadow-glow-gold"
              : "shadow-glow-cyan-sm group-hover:shadow-glow-cyan",
          ].join(" ")}
        >
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element -- external/unconfigured card photo hosts
            <img
              src={imageSrc}
              alt={imageAlt ?? name}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Gem className="h-10 w-10 text-text-tertiary" strokeWidth={1.5} />
            </div>
          )}
        </div>
      </div>

      {/* Label plate — required, not optional */}
      <div className="mt-3 px-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-sans text-sm font-medium text-text-primary">{name}</p>
          <GradeBadge grade={grade} label={gradeLabel} />
        </div>
        <p className="mt-1 font-mono text-xs tracking-wide text-text-secondary">
          {grader} · {grade}
          {gradeLabel ? ` · ${gradeLabel}` : ""}
        </p>
        <p className="font-mono text-xs tracking-wide text-text-tertiary">
          #{certNumber}
        </p>
        {populationOne ? <RareFlag className="mt-2" /> : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-slab focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60"
      >
        {card}
      </Link>
    );
  }

  return card;
}
