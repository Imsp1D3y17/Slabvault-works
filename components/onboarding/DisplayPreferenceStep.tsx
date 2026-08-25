"use client";

import { Frame, LayoutGrid, Lock } from "lucide-react";
import { DISPLAY_OPTIONS, type DisplayOptionId } from "./types";

const ICONS: Record<DisplayOptionId, typeof LayoutGrid> = {
  "wall-mounts": LayoutGrid,
  "acrylic-cases": Frame,
  "vault-box": Lock,
};

interface DisplayPreferenceStepProps {
  selected: DisplayOptionId | null;
  onSelect: (id: DisplayOptionId) => void;
}

export function DisplayPreferenceStep({
  selected,
  onSelect,
}: DisplayPreferenceStepProps) {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        How do you want to display them?
      </h1>
      <p className="mt-2 font-sans text-sm text-text-secondary">
        Pick a look for your showcase — you can change this anytime.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {DISPLAY_OPTIONS.map((option) => {
          const Icon = ICONS[option.id];
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              aria-pressed={isSelected}
              className={[
                "flex flex-col items-start rounded-slab border bg-surface-card p-5 text-left",
                "transition-all duration-400 ease-vault focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60",
                isSelected
                  ? "border-accent-cyan/60 shadow-glow-cyan-sm"
                  : "border-border-hairline hover:border-border-soft",
              ].join(" ")}
            >
              <Icon
                className={[
                  "h-6 w-6 transition-colors duration-400 ease-vault",
                  isSelected ? "text-accent-cyan" : "text-text-secondary",
                ].join(" ")}
                strokeWidth={1.5}
              />
              <p className="mt-4 font-sans text-sm font-medium text-text-primary">
                {option.title}
              </p>
              <p className="mt-1.5 font-sans text-xs leading-relaxed text-text-secondary">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
