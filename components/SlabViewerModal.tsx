"use client";

import { useEffect, useState } from "react";
import { Gem, X } from "lucide-react";
import { GradeBadge } from "./GradeBadge";
import { RareFlag } from "./RareFlag";
import { isGemMint, type SlabData } from "./slab-utils";

/**
 * Fullscreen slab viewer — Brand Kit section 2: bg-void ("#050506 — true
 * black") is reserved for modal scrims / the fullscreen slab viewer.
 * Reveal pattern per section 4 Motion: fade + slight scale-up (0.98 → 1),
 * never slide-from-off-screen.
 */
interface SlabViewerModalProps {
  slab: SlabData | null;
  onClose: () => void;
}

export function SlabViewerModal({ slab, onClose }: SlabViewerModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wrapped in rAF (an async boundary) rather than set synchronously in
    // the effect body, in both directions, so opening and closing both
    // drive the CSS transition instead of one snapping instantly.
    const frame = requestAnimationFrame(() => setVisible(Boolean(slab)));
    if (!slab) {
      return () => cancelAnimationFrame(frame);
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [slab, onClose]);

  if (!slab) return null;

  const gold = slab.featured || isGemMint(slab.grade);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${slab.name} — fullscreen slab viewer`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-void/90 p-6 backdrop-blur-vault"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={[
          "absolute right-6 top-6 text-text-secondary transition-colors duration-400 ease-vault hover:text-accent-cyan",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 rounded-full",
        ].join(" ")}
      >
        <X className="h-6 w-6" strokeWidth={1.5} />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className={[
          "flex w-full max-w-sm flex-col items-center transition-all ease-vault",
          visible ? "scale-100 opacity-100 duration-400" : "scale-[.98] opacity-0 duration-0",
        ].join(" ")}
      >
        <div className="relative w-full">
          <div
            aria-hidden
            className={[
              "pointer-events-none absolute inset-8 -z-10 rounded-slab blur-[100px] opacity-[0.18]",
              gold ? "bg-accent-gold" : "bg-accent-cyan",
            ].join(" ")}
          />
          <div
            className={[
              "aspect-slab w-full rounded-slab border border-border-hairline bg-surface-card p-6",
              gold ? "shadow-glow-gold" : "shadow-glow-cyan",
            ].join(" ")}
          >
            {slab.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element -- external/unconfigured card photo hosts
              <img
                src={slab.imageSrc}
                alt={slab.imageAlt ?? slab.name}
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Gem className="h-16 w-16 text-text-tertiary" strokeWidth={1.5} />
              </div>
            )}
          </div>
        </div>

        {/* Label plate — required here too, just set at viewer scale */}
        <div className="mt-6 w-full px-1 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="font-sans text-base font-medium text-text-primary">
              {slab.name}
            </p>
            <GradeBadge grade={slab.grade} label={slab.gradeLabel} />
          </div>
          <p className="mt-2 font-mono text-sm tracking-wide text-text-secondary">
            {slab.grader} · {slab.grade}
            {slab.gradeLabel ? ` · ${slab.gradeLabel}` : ""}
          </p>
          <p className="font-mono text-xs tracking-wide text-text-tertiary">
            #{slab.certNumber}
          </p>
          {slab.populationOne ? (
            <RareFlag className="mt-3 inline-flex" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
