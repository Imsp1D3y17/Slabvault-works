interface StepIndicatorProps {
  step: 1 | 2 | 3;
  labels: [string, string, string];
}

export function StepIndicator({ step, labels }: StepIndicatorProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={[
              "h-1 flex-1 rounded-full transition-colors duration-400 ease-vault",
              n <= step ? "bg-accent-cyan" : "bg-border-hairline",
            ].join(" ")}
          />
        ))}
      </div>
      <p className="mt-3 font-mono text-xs tracking-wide text-text-secondary">
        STEP {step} OF 3 · {labels[step - 1].toUpperCase()}
      </p>
    </div>
  );
}
