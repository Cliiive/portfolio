import { useParams, Link } from "react-router-dom";
import { getBySlug } from "../content";
import MarkdownRenderer from "../lib/MarkdownRenderer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const item = slug ? getBySlug("project", slug) : undefined;

  if (!item) {
    return (
      <div className="space-y-4">
        <p className="text-slate-400">Project not found.</p>
        <Link to="/projects" className="text-sky-400 underline underline-offset-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-4">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          style={{ color: "#d79921" }}
        >
          ← Back to Projects
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
        {item.description && <p className="text-slate-400 mt-2">{item.description}</p>}
        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <MarkdownRenderer md={item.content} mdPath={item.path} />
    </article>
  );
}
