export const GRADERS = ["PSA", "BGS", "CGC", "SGC"] as const;
export type Grader = (typeof GRADERS)[number];

export interface GrailInput {
  nameAndSet: string;
  grader: Grader;
  grade: string;
}

export const EMPTY_GRAIL: GrailInput = { nameAndSet: "", grader: "PSA", grade: "" };

export function isGrailComplete(grail: GrailInput): boolean {
  return grail.nameAndSet.trim() !== "" && grail.grade.trim() !== "";
}

export const DISPLAY_OPTIONS = [
  {
    id: "wall-mounts",
    title: "Minimalist Floating Wall Mounts",
    description:
      "Slabs appear to float against your wall — clean, gallery-white-cube energy.",
  },
  {
    id: "acrylic-cases",
    title: "Lit Acrylic Display Cases",
    description:
      "Individually lit cases for each grail — a museum spotlight that's always on.",
  },
  {
    id: "vault-box",
    title: "Secure Vault Box",
    description:
      "A single locked case housing your full collection, out of the light.",
  },
] as const;

export type DisplayOptionId = (typeof DISPLAY_OPTIONS)[number]["id"];

/**
 * Illustrative-only valuation curve, not real market pricing. Rewards high
 * grades steeply (matching how gem mint premiums behave in the real
 * grading market) so the Step 3 payoff number feels meaningful.
 */
const GRADER_MULTIPLIER: Record<Grader, number> = {
  PSA: 1.15,
  BGS: 1.1,
  CGC: 1,
  SGC: 0.95,
};

export function estimateGrailValue(grail: GrailInput): number {
  const numericGrade = parseFloat(grail.grade);
  if (Number.isNaN(numericGrade) || numericGrade <= 0) return 0;
  const clamped = Math.min(numericGrade, 10);
  const baseline = 150;
  const gradeCurve = Math.pow(clamped / 10, 4) * 8 + 0.5;
  return Math.round(baseline * gradeCurve * GRADER_MULTIPLIER[grail.grader]);
}
