import Tile from "../components/Tile";
import { getAll, routeFor } from "../content";

export default function Projects() {
  const items = getAll("project");
  return (
    <section>
      <div className="text-left">
        <h1 className="text-2xl font-semibold tracking-tight" style={{ color: '#d79921' }}>Projects / Blog</h1>
        <p className="mt-3 mb-8" style={{ color: '#bdae93' }}>Code, experiments, and notes worth sharing.</p>
      </div>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Tile
              key={it.slug}
              to={routeFor(it)}
              title={it.title}
              description={it.description}
              tags={it.tags}
            />)
          )}
        </div>
      </div>
    </section>
  );
}
