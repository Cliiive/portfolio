export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Hi, I'm Jonas
        </span>{" "}
        — 20, CS student focused on cybersecurity
      </h1>
      <p className="text-slate-300 leading-7 max-w-3xl border-l-2 border-violet-700/60 pl-4">
        I study computer science and spend most of my time exploring systems, security, and low-level programming. I value clear thinking, practical skills, and a tight
        feedback loop. This site collects my projects, notes, and security writeups — no fluff.
      </p>

      <div className="flex flex-wrap gap-2">
        {[
          "Security",
          "Systems",
          "Databases",
          "C/C++",
          "Postgres",
        ].map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-md border border-violet-700/60 bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold text-slate-200">Focus Areas</h2>
          <p className="text-sm text-slate-400 mt-2">
            Binary exploitation, systems programming, secure infrastructure, databases.
          </p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <h2 className="text-sm font-semibold text-slate-200">Toolbox</h2>
          <p className="text-sm text-slate-400 mt-2">Linux, C/C++, Python, Go, Postgres, Docker, Nmap, Ghidra.</p>
        </div>
      </div>
    </section>
  );
}
