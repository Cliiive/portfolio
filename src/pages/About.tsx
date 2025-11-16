export default function About() {
  return (
    <section className="space-y-6 relative">
      <h1 className="text-3xl font-semibold tracking-tight" style={{ color: '#d79921' }}>
        Jonas Sasowski
      </h1>
      <p className="leading-7 max-w-3xl" style={{ color: '#d5c4a1' }}>
      
A computer science student in Karlsruhe (currently 5th semester) exploring low-level systems, C++, and cyber security. I like understanding how things behave under the hood and why.
Most of my time goes into trying out new C++ ideas, doing CTFs, reading about new exploitation techniques, or breaking my Arch installation for the 100th time because I wanted to tweak something.
      </p>
        <p className="leading-7 max-w-3xl" style={{ color: '#d5c4a1' }}>
      

This site is where I keep track of what I've been working on.
      </p>


      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border p-4" style={{ borderColor: '#3c3836', backgroundColor: '#282828' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#ebdb2' }}>Focus Areas</h2>
          <p className="text-sm mt-2" style={{ color: '#bdae93' }}>
        Passionate about Security, CTFs, and Ethical Hacking. I enjoy exploring vulnerabilities, understanding how systems can fail, and applying hands-on techniques to learn and test real-world scenarios.
          </p>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: '#3c3836', backgroundColor: '#282828' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#ebdbb2' }}>Toolbox</h2>
        <div className="text-sm mt-2" style={{ color: '#bdae93' }}>
        <ul className="list-disc list-inside pl-0 space-y-4">
          {[ 
          { title: "C, C++", desc: "systems programming, memory management" },
          { title: "Python", desc: "scripting, automation, security tooling" },
          { title: "Docker & Linux", desc: "containers, shell scripting" },
          { title: "Git", desc: "version control" },
          { title: "Penetration testing", desc: "ethical hacking, vulnerability research" },
          ].map((item) => (
          <li key={item.title} className="flex flex-col">
        <div className="text-sm font-medium" style={{ color: "#ebdbb2" }}>{item.title}</div>
        <div className="text-xs mt-0.5" style={{ color: "#bdae93" }}>{item.desc}</div>
          </li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    </section>
  );
}
