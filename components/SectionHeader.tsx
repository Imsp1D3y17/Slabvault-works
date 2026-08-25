import type { ReactNode } from "react";

/**
 * "Room" section header — Brand Kit section 4 Layout/grid guidelines +
 * section 5 example. The light-cap gradient line is a per-section room
 * cue (a museum cove-light strip) — never applied per-card.
 *
 * v1.1 "Plate Label" typography: no serif, no italic — those read
 * soft/editorial, working against the masculine revision. Uppercase
 * General Sans at wide tracking instead, like text engraved into brass.
 */
interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <div className={["pt-3 pb-8", className].join(" ")}>
      <div className="mb-6 h-px w-full bg-light-cap" />
      <h2 className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-text-secondary">
        {children}
      </h2>
    </div>
  );
}
