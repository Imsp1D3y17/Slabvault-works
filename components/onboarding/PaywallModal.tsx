"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/**
 * Soft paywall — shown after Step 3's instant payoff, not before it, so
 * the user gets the value/dopamine hit first. Always dismissable (X and
 * "Maybe later") — a paywall with no exit is a dark pattern, not a soft
 * one. Pricing is stated plainly; no fake urgency or countdowns.
 *
 * There's no real checkout/payment backend wired up here, so the CTAs are
 * honest about what they do: they take you into the app rather than
 * pretending to have charged a card.
 */
interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
}

const WEEKLY_PRICE = 8.99;
const ANNUAL_PRICE = 89;
const ANNUAL_WEEKLY_EQUIVALENT = (ANNUAL_PRICE / 52).toFixed(2);
const SAVINGS_PERCENT = Math.round(
  (1 - ANNUAL_PRICE / (WEEKLY_PRICE * 52)) * 100
);

export function PaywallModal({ open, onClose }: PaywallModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Unlock your full vault"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-void/90 p-4 backdrop-blur-vault sm:p-6"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg animate-[reveal_400ms_cubic-bezier(0.16,1,0.3,1)_both] rounded-slab border border-border-hairline bg-surface-card p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
              Unlock your full vault
            </h2>
            <p className="mt-1.5 font-sans text-sm text-text-secondary">
              Unlimited grails, live equity, and full museum display planning.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 text-text-secondary transition-colors duration-400 ease-vault hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 rounded-full"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col rounded-slab border border-border-hairline p-5">
            <p className="font-sans text-xs uppercase tracking-wide text-text-secondary">
              Weekly
            </p>
            <p className="mt-2 font-mono text-2xl text-text-primary">
              ${WEEKLY_PRICE}
              <span className="font-sans text-sm text-text-secondary">/wk</span>
            </p>
            <p className="mt-1 font-sans text-xs text-text-tertiary">
              Billed weekly · cancel anytime
            </p>
            <Link
              href="/vault"
              className="mt-5 block rounded-full border border-border-hairline px-4 py-2 text-center font-sans text-sm font-semibold text-text-primary transition-colors duration-400 ease-vault hover:border-accent-cyan/60 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60"
            >
              Start Weekly Plan
            </Link>
          </div>

          <div className="relative flex flex-col rounded-slab border border-accent-cyan/60 bg-bg-obsidian p-5 shadow-glow-cyan-sm">
            <span className="absolute -top-3 left-5 rounded-full border border-accent-cyan/60 bg-surface-card px-2.5 py-0.5 font-sans text-[10px] font-medium uppercase tracking-wide text-accent-cyan">
              Best Value
            </span>
            <p className="font-sans text-xs uppercase tracking-wide text-text-secondary">
              Annual
            </p>
            <p className="mt-2 font-mono text-2xl text-text-primary">
              ${ANNUAL_PRICE}
              <span className="font-sans text-sm text-text-secondary">/yr</span>
            </p>
            <p className="mt-1 font-sans text-xs text-text-tertiary">
              ${ANNUAL_WEEKLY_EQUIVALENT}/wk · save {SAVINGS_PERCENT}% vs. weekly
            </p>
            <Link
              href="/vault"
              className="mt-5 block rounded-full bg-accent-cyan px-4 py-2 text-center font-sans text-sm font-semibold text-text-onaccent transition-colors duration-400 ease-vault hover:bg-accent-cyan-dim focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60"
            >
              Start Annual Plan
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full text-center font-sans text-xs text-text-tertiary underline-offset-4 transition-colors duration-400 ease-vault hover:text-text-secondary hover:underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
