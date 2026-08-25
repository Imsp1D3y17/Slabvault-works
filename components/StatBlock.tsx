/**
 * Metrics & stats — Brand Kit section 4: format every stat like a line on
 * a certificate, not a BI dashboard tile. No gauges/donuts.
 */
interface StatBlockProps {
  label: string;
  value: string;
  delta?: {
    direction: "up" | "down";
    text: string;
  };
  className?: string;
}

export function StatBlock({ label, value, delta, className = "" }: StatBlockProps) {
  return (
    <div className={className}>
      <p className="font-sans text-xs uppercase tracking-wide text-text-secondary">
        {label}
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="font-mono text-2xl text-text-primary">{value}</p>
        {delta ? (
          <span
            className={[
              "font-mono text-xs font-medium",
              delta.direction === "up" ? "text-status-success" : "text-status-danger",
            ].join(" ")}
          >
            {delta.direction === "up" ? "▲" : "▼"} {delta.text}
          </span>
        ) : null}
      </div>
    </div>
  );
}
