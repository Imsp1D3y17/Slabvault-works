/**
 * Population-1 / rare variant flag — Brand Kit section 4 "Grade badges":
 * thin accent-magenta outline only, never a solid fill. Treat like a red
 * flag at auction — rare on screen, high signal when it appears.
 */
interface RareFlagProps {
  label?: string;
  className?: string;
}

export function RareFlag({ label = "POP 1", className = "" }: RareFlagProps) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center rounded-full border border-accent-magenta px-2.5 py-0.5",
        "font-sans text-[10px] font-medium uppercase tracking-wide text-accent-magenta",
        className,
      ].join(" ")}
    >
      {label}
    </span>
  );
}
