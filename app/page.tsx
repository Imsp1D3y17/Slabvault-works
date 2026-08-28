import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  Gem,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "The Digital Vault",
    description:
      "Track cert numbers, purchase price, and live portfolio equity without the spreadsheet clutter.",
  },
  {
    icon: LayoutGrid,
    title: "Museum Display Planner",
    description:
      "Preview how your slabs look mounted in custom wall grids or lit acrylic cases before you buy a single frame.",
  },
  {
    icon: FileCheck2,
    title: "Grail Insurance & Export",
    description:
      "Clean, exportable reports built for appraisals, claims, and high-value asset protection.",
  },
];

export default function Home() {export default function Home() {
  const [displaySettings, setDisplaySettings] = useState<DisplaySettings>({
    mount: 'triumph-rail',
    theme: 'triumph-amber',
    background: 'triumph-vault',
    layout: 'triumph-monolith',
    showSubgrades: true,
    showLiveComps: true,
    showLightingHalo: true,
    rotationSpeed: 0.5,
    ambientLightIntensity: 0.8,
  });

  return (
    <div className="relative flex min-h-screen f">
      <Nav />
      <Hero />
      <Features />
      <TrustBanner />
    </div>
  );
}

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[linear-gradient(180deg,#05050A_0%,#0A0A16_45%,#05050A_100%)] font-landing-sans text-white">
      <Nav />
      <Hero />
      <Features />
      <TrustBanner />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-cyan" strokeWidth={1.5} />
          <span className="font-landing-display text-lg font-bold tracking-tight">
            Slab<span className="text-magenta">Vault</span>
          </span>
        </Link>
        <Link
          href="/onboarding"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold tracking-tight text-obsidian shadow-[0_0_0_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-cyan sm:px-5"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 sm:px-8 sm:py-32">
      {/* Multi-layered ambient glow — deeper, moodier than a flat blob pair */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-magenta/25 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan/10 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/[0.04] px-4 py-1.5 font-landing-mono text-xs font-medium uppercase tracking-widest text-cyan shadow-landing-badge backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Museum-Grade Digital Vaulting
        </span>
        <h1 className="font-landing-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Stop Hiding Your Grails in a{" "}
          <span className="text-zinc-600 line-through decoration-magenta/70">
            Spreadsheet
          </span>
          . Showcase Them Like Art.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300 sm:text-xl">
          SlabVault gives your PSA, BGS, and CGC graded cards a home worthy of
          them — museum-grade digital vaulting with custom wall-mount layout
          previews, so every grail gets the gallery treatment it deserves.
        </p>
        <Link
          href="/onboarding"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-magenta via-magenta to-cyan px-8 py-4 font-landing-sans text-base font-semibold tracking-tight text-obsidian shadow-landing-cta transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_50px_-8px_rgba(255,0,127,0.6),0_14px_80px_-14px_rgba(0,240,255,0.5)]"
        >
          Build Your Virtual Showcase
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-landing-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built for collectors who take it seriously
          </h2>
          <p className="mt-4 text-zinc-300">
            Every tool you need to catalog, display, and protect a collection
            worth showing off.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/25 to-cyan/5 text-cyan shadow-[0_0_24px_-6px_rgba(0,240,255,0.55)] ring-1 ring-cyan/30 transition-all duration-300 group-hover:from-magenta/25 group-hover:to-magenta/5 group-hover:text-magenta group-hover:shadow-[0_0_24px_-6px_rgba(255,0,127,0.55)] group-hover:ring-magenta/30">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-landing-sans text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBanner() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 shrink-0 text-cyan" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-semibold text-white">
              Secure, encrypted cloud storage
            </p>
            <p className="text-xs text-zinc-400">
              Built for collectors managing six- and seven-figure portfolios.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="h-8 w-8 shrink-0 text-magenta" strokeWidth={1.5} />
          <div>
            <p className="text-sm font-semibold text-white">
              Private by default
            </p>
            <p className="text-xs text-zinc-400">
              Your vault, your data — never sold, never shared.
            </p>
          </div>
        </div>
        <p className="font-landing-mono text-xs uppercase tracking-wide text-zinc-500">
          © {new Date().getFullYear()} SlabVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
const [displaySettings, setDisplaySettings] = useState<DisplaySettings>({
  mount: 'triumph-rail',
  theme: 'triumph-amber',
  background: 'triumph-vault',
  layout: 'triumph-monolith',
  showSubgrades: true,
  showLiveComps: true,
  showLightingHalo: true,
  rotationSpeed: 0.5,
  ambientLightIntensity: 0.8,
});
