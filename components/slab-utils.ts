export interface SlabData {
  name: string;
  grader: string;
  grade: number | string;
  gradeLabel?: string;
  certNumber: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Population-1 or other rare variant — shows the magenta outline flag. */
  populationOne?: boolean;
  /** Forces the gold "prestige" spotlight/shadow even below a 9.5 grade. */
  featured?: boolean;
}

/** Gem Mint threshold — Brand Kit section 4: gold is reserved for 9.5–10. */
export function isGemMint(grade: number | string): boolean {
  const numeric = typeof grade === "number" ? grade : parseFloat(grade);
  return !Number.isNaN(numeric) && numeric >= 9.5;
}
