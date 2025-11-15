import Tile from "../components/Tile";
import { getAll, routeFor } from "../content";

export default function Writeups() {
  const items = getAll("writeup");
  return (
    <section>
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between gap-3">
        <div className="text-left">
          <h1 className="text-2xl font-semibold tracking-tight" style={{ color: '#d79921' }}>Writeups</h1>
          <p className="mt-3" style={{ color: '#bdae93' }}>CTFs, vulns, and investigations.</p>
        </div>
        <img
          src="https://tryhackme-badges.s3.amazonaws.com/c1ive.png"
          alt="TryHackMe badge"
          className="h-12 md:h-16 opacity-70 flex-shrink-0"
          loading="lazy"
        />
      </div>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Tile key={it.slug} to={routeFor(it)} title={it.title} description={it.description} tags={it.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}
