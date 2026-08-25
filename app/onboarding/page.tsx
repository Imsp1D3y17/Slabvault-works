"use client";

import { useEffect, useState } from "react";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { GrailIntakeStep } from "@/components/onboarding/GrailIntakeStep";
import { DisplayPreferenceStep } from "@/components/onboarding/DisplayPreferenceStep";
import { ShowcasePreviewStep } from "@/components/onboarding/ShowcasePreviewStep";
import { PaywallModal } from "@/components/onboarding/PaywallModal";
import {
  EMPTY_GRAIL,
  isGrailComplete,
  type DisplayOptionId,
  type GrailInput,
} from "@/components/onboarding/types";

const STEP_LABELS: [string, string, string] = [
  "Holy Grail Intake",
  "Display Preference",
  "Your Showcase",
];

export default function OnboardingPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [grails, setGrails] = useState<GrailInput[]>([
    { ...EMPTY_GRAIL },
    { ...EMPTY_GRAIL },
    { ...EMPTY_GRAIL },
  ]);
  const [displayPreference, setDisplayPreference] =
    useState<DisplayOptionId | null>(null);
  const [showValidation, setShowValidation] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  const grailsComplete = grails.every(isGrailComplete);

  // Deliver the payoff first, then transition into the soft paywall a beat
  // later — "immediate value and dopamine" before the upsell, per spec.
  useEffect(() => {
    if (step !== 3) return;
    const timer = setTimeout(() => setShowPaywall(true), 900);
    return () => clearTimeout(timer);
  }, [step]);

  function updateGrail(index: number, patch: Partial<GrailInput>) {
    setGrails((current) =>
      current.map((grail, i) => (i === index ? { ...grail, ...patch } : grail))
    );
  }

  function goNext() {
    if (step === 1) {
      if (!grailsComplete) {
        setShowValidation(true);
        return;
      }
      setShowValidation(false);
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!displayPreference) return;
      setStep(3);
    }
  }

  function goBack() {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  }

  return (
    <div className="min-h-screen bg-bg-obsidian">
      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        <StepIndicator step={step} labels={STEP_LABELS} />

        <div
          key={step}
          className="mt-10 animate-[reveal_400ms_cubic-bezier(0.16,1,0.3,1)_both]"
        >
          {step === 1 && (
            <GrailIntakeStep grails={grails} onChange={updateGrail} />
          )}
          {step === 2 && (
            <DisplayPreferenceStep
              selected={displayPreference}
              onSelect={setDisplayPreference}
            />
          )}
          {step === 3 && <ShowcasePreviewStep grails={grails} />}
        </div>

        {step === 1 && showValidation && !grailsComplete && (
          <p className="mt-4 font-sans text-xs text-status-danger">
            Fill in a name and grade for all three grails to continue.
          </p>
        )}

        {step < 3 && (
          <div className="mt-8 flex items-center justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="font-sans text-sm text-text-secondary transition-colors duration-400 ease-vault hover:text-text-primary"
              >
                Back
              </button>
            ) : (
              <span />
            )}
            <button
              type="button"
              onClick={goNext}
              disabled={step === 2 && !displayPreference}
              className="rounded-full bg-accent-cyan px-6 py-2.5 font-sans text-sm font-semibold text-text-onaccent transition-colors duration-400 ease-vault hover:bg-accent-cyan-dim disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <PaywallModal open={showPaywall} onClose={() => setShowPaywall(false)} />
    </div>
  );
}
