import { ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-obsidian px-6 py-24 text-center">
      <ShieldCheck className="h-12 w-12 text-cyan" strokeWidth={1.5} />
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Slab<span className="text-magenta">Vault</span>
      </h1>
      <p className="max-w-md text-zinc-400">
        Your graded card collection, secured in the vault.
      </p>
      <p className="rounded-md border border-obsidian-light bg-obsidian-light px-4 py-2 font-mono text-sm text-cyan">
        CERT #00F0FF-1993042
      </p>
    </main>
  );
}
