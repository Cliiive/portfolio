import { useParams, Link } from "react-router-dom";
import { getBySlug } from "../content";
import MarkdownRenderer from "../lib/MarkdownRenderer";

export default function WriteupDetail() {
  const { slug } = useParams();
  const item = slug ? getBySlug("writeup", slug) : undefined;

  if (!item) {
    return (
      <div className="space-y-4">
        <p className="text-slate-400">Writeup not found.</p>
        <Link to="/writeups" className="text-sky-400 underline underline-offset-4">
          Back to Writeups
        </Link>
      </div>
    );
  }

  return (
    <article className="container-std py-6">
      <div className="mx-auto max-w-3xl space-y-4">
        <div>
          <Link
            to="/writeups"
            className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            style={{ color: "#d79921" }}
          >
            ← Back to Writeups
          </Link>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{item.title}</h1>
          {item.description && <p className="text-slate-400 mt-2">{item.description}</p>}
          {item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] sm:text-xs"
                  style={{ borderColor: "#504945", backgroundColor: "#3c3836", color: "#d5c4a1" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mdx-wrapper">
          <MarkdownRenderer md={item.content} mdPath={item.path} />
        </div>
      </div>
    </article>
  );
}
