export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#f7f6f3] text-stone-800">
      <header className="border-b border-stone-200/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <p className="text-sm font-medium tracking-wide text-stone-700">
            Hatch Analytics
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-stone-400">
            WIP
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-16 sm:py-24">
        <section
          aria-label="Hero"
          className="rounded-sm border border-dashed border-stone-300 bg-white/60 px-6 py-16 sm:px-10"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-stone-400">
            Hero
          </p>
          <h1 className="max-w-xl text-3xl font-medium leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Hatch Analytics
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-stone-500">
            Landing shell. Content to follow.
          </p>
        </section>

        <section
          aria-label="Services"
          className="rounded-sm border border-dashed border-stone-300 bg-white/40 px-6 py-12"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-stone-400">
            Services
          </p>
          <p className="text-sm text-stone-500">Section placeholder.</p>
        </section>

        <section
          aria-label="Approach"
          className="rounded-sm border border-dashed border-stone-300 bg-white/40 px-6 py-12"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-stone-400">
            Approach
          </p>
          <p className="text-sm text-stone-500">Section placeholder.</p>
        </section>

        <section
          aria-label="Proof"
          className="rounded-sm border border-dashed border-stone-300 bg-white/40 px-6 py-12"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-stone-400">
            Proof
          </p>
          <p className="text-sm text-stone-500">Section placeholder.</p>
        </section>

        <section
          aria-label="Contact"
          className="rounded-sm border border-dashed border-stone-300 bg-white/40 px-6 py-12"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-stone-400">
            Contact
          </p>
          <p className="text-sm text-stone-500">Section placeholder.</p>
        </section>
      </main>

      <footer className="border-t border-stone-200/80">
        <div className="mx-auto flex w-full max-w-5xl px-6 py-6">
          <p className="text-xs text-stone-400">Hatch Analytics</p>
        </div>
      </footer>
    </div>
  );
}
