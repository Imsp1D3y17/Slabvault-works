import { SlabGallery } from "@/components/SlabGallery";
import { SectionHeader } from "@/components/SectionHeader";
import { StatBlock } from "@/components/StatBlock";

const baseSetCards = [
  {
    name: "Blastoise · Base Set",
    grader: "PSA",
    grade: 9,
    gradeLabel: "MINT",
    certNumber: "38214477",
  },
  {
    name: "Venusaur · Base Set",
    grader: "BGS",
    grade: 9.5,
    gradeLabel: "GEM MT",
    certNumber: "19558302",
  },
  {
    name: "Chansey · Base Set",
    grader: "PSA",
    grade: 8,
    gradeLabel: "NM-MT",
    certNumber: "50291884",
  },
  {
    name: "Alakazam · Base Set",
    grader: "CGC",
    grade: 9,
    gradeLabel: "MINT",
    certNumber: "77102265",
    populationOne: true,
  },
];

const modernCards = [
  {
    name: "Umbreon VMAX · Alt Art",
    grader: "PSA",
    grade: 10,
    gradeLabel: "GEM MT",
    certNumber: "88410023",
  },
  {
    name: "Lugia · Silver Tempest",
    grader: "CGC",
    grade: 9.5,
    gradeLabel: "GEM MT",
    certNumber: "63207719",
  },
  {
    name: "Charizard · Obsidian Flames",
    grader: "BGS",
    grade: 9,
    gradeLabel: "MINT",
    certNumber: "40018856",
  },
];

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-bg-obsidian">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <header className="mb-4">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            The Vault
          </h1>
          <p className="mt-2 max-w-xl font-sans text-sm text-text-secondary">
            Your collection, catalogued like a certificate — not a spreadsheet.
          </p>
        </header>

        {/* Metrics & stats — spec-sheet grid, generous gutters, no gauges */}
        <div className="grid grid-cols-2 gap-8 border-b border-border-hairline pb-12 sm:grid-cols-4">
          <StatBlock label="Slabs Vaulted" value="128" />
          <StatBlock
            label="Portfolio Equity"
            value="$42,850"
            delta={{ direction: "up", text: "3.2%" }}
          />
          <StatBlock label="Gem Mint 9.5+" value="19" />
          <StatBlock label="Population-1" value="3" />
        </div>

        {/* Gallery-wall model: one asymmetric featured slot before the grid */}
        <div className="pt-12">
          <SlabGallery
            cards={[
              {
                name: "Charizard · Base Set",
                grader: "PSA",
                grade: 10,
                gradeLabel: "GEM MT",
                certNumber: "47281955",
                featured: true,
              },
            ]}
            className="max-w-xs"
          />
        </div>

        <SectionHeader>Base Set · 1999</SectionHeader>
        <SlabGallery
          cards={baseSetCards}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8"
        />

        <SectionHeader>Modern · 2023</SectionHeader>
        <SlabGallery
          cards={modernCards}
          className="grid grid-cols-2 gap-6 pb-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8"
        />
      </div>
    </div>
  );
}
