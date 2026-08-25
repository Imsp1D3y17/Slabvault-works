"use client";

import { ChevronDown } from "lucide-react";
import { GRADERS, type GrailInput } from "./types";

interface GrailIntakeStepProps {
  grails: GrailInput[];
  onChange: (index: number, patch: Partial<GrailInput>) => void;
}

const fieldLabel =
  "font-sans text-xs uppercase tracking-wide text-text-secondary";
const fieldInput =
  "mt-1.5 w-full rounded-slab border border-border-hairline bg-bg-obsidian px-3 py-2 font-sans text-sm text-text-primary placeholder:text-text-tertiary transition-colors duration-400 ease-vault focus:border-accent-cyan/60 focus:outline-none";

export function GrailIntakeStep({ grails, onChange }: GrailIntakeStepProps) {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        Your Top 3 Holy Grails
      </h1>
      <p className="mt-2 font-sans text-sm text-text-secondary">
        Start with the pieces you&rsquo;d save first. We&rsquo;ll build your
        showcase from these — no spreadsheet required.
      </p>

      <div className="mt-8 flex flex-col gap-6">
        {grails.map((grail, index) => (
          <div
            key={index}
            className="rounded-slab border border-border-hairline bg-surface-card p-5"
          >
            <p className="font-mono text-xs tracking-wide text-text-tertiary">
              GRAIL {index + 1} OF 3
            </p>

            <label className="mt-4 block">
              <span className={fieldLabel}>Card Name &amp; Set</span>
              <input
                type="text"
                value={grail.nameAndSet}
                onChange={(event) =>
                  onChange(index, { nameAndSet: event.target.value })
                }
                placeholder="e.g., 1st Edition Charizard"
                className={fieldInput}
              />
            </label>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <label className="block">
                <span className={fieldLabel}>Grading Company</span>
                <div className="relative mt-1.5">
                  <select
                    value={grail.grader}
                    onChange={(event) =>
                      onChange(index, {
                        grader: event.target.value as GrailInput["grader"],
                      })
                    }
                    className={[
                      fieldInput,
                      "mt-0 appearance-none pr-8",
                    ].join(" ")}
                  >
                    {GRADERS.map((grader) => (
                      <option key={grader} value={grader}>
                        {grader}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
                    strokeWidth={1.5}
                  />
                </div>
              </label>

              <label className="block">
                <span className={fieldLabel}>Grade</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={1}
                  max={10}
                  step={0.5}
                  value={grail.grade}
                  onChange={(event) =>
                    onChange(index, { grade: event.target.value })
                  }
                  placeholder="10"
                  className={fieldInput}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
