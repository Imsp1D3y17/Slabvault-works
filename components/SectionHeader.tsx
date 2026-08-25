import type { ReactNode } from "react";

/**
 * "Room" section header — Brand Kit section 4 Layout/grid guidelines +
 * section 5 example. The light-cap gradient line is a per-section room
 * cue (a museum cove-light strip) — never applied per-card.
 */
interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <div className={["pt-3 pb-8", className].join(" ")}>
      <div className="mb-6 h-px w-full bg-light-cap" />
      <h2 className="font-label text-sm italic uppercase tracking-wide text-text-secondary">
        {children}
      </h2>
    </div>
  );
}
