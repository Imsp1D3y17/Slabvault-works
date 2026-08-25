/**
 * Grade badges — SlabVault Brand Kit v1.0, section 4 "Grade badges".
 *
 * Non-negotiable: accent-gold is reserved for Gem Mint / 9.5–10 badges.
 * It is never used for buttons, links, or nav elsewhere in the app.
 */

function isGemMint(grade: number | string): boolean {
  const numeric = typeof grade === "number" ? grade : parseFloat(grade);
  return !Number.isNaN(numeric) && numeric >= 9.5;
}

interface GradeBadgeProps {
  grade: number | string;
  label?: string;
  className?: string;
}

export function GradeBadge({ grade, label, className = "" }: GradeBadgeProps) {
  const gem = isGemMint(grade);

  return (
    <span
      className={[
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5",
        gem
          ? "bg-linear-to-br from-accent-gold to-accent-gold-light text-text-onaccent"
          : "border border-border-hairline text-text-secondary",
        className,
      ].join(" ")}
    >
      <span className="font-mono text-xs font-medium tracking-wide">{grade}</span>
      {label ? (
        <span className="font-sans text-[10px] font-medium uppercase tracking-wide">
          {label}
        </span>
      ) : null}
    </span>
  );
}
