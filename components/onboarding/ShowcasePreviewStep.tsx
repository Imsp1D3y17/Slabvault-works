import { SlabCard } from "@/components/SlabCard";
import { StatBlock } from "@/components/StatBlock";
import { estimateGrailValue, type GrailInput } from "./types";

interface ShowcasePreviewStepProps {
  grails: GrailInput[];
}

export function ShowcasePreviewStep({ grails }: ShowcasePreviewStepProps) {
  const values = grails.map(estimateGrailValue);
  const total = values.reduce((sum, value) => sum + value, 0);

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Your Grail Showcase is ready
      </h1>
      <p className="mt-2 font-sans text-sm text-text-secondary">
        Here&rsquo;s how your first three pieces look, vaulted.
      </p>

      <div className="mt-8 rounded-slab border border-border-hairline bg-surface-card p-5 sm:p-6">
        <StatBlock label="Estimated Portfolio Equity" value={`$${total.toLocaleString()}`} />
        <p className="mt-2 font-sans text-xs text-text-tertiary">
          Illustrative estimate based on grade and grading company — not a
          formal appraisal.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {grails.map((grail, index) => (
          <SlabCard
            key={index}
            name={grail.nameAndSet || "Untitled Grail"}
            grader={grail.grader}
            grade={grail.grade || "—"}
            certNumber={`TEMP-${String(index + 1).padStart(4, "0")}`}
          />
        ))}
      </div>
    </div>
  );
}
