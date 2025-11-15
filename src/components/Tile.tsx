import { Link } from "react-router-dom";

export type TileProps = {
  to: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function Tile({ to, title, description, tags }: TileProps) {
  return (
    <Link
      to={to}
      className="block rounded-lg border border-slate-800 bg-slate-900/40 p-4 hover:border-slate-700 hover:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-violet-600"
    >
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-slate-400 line-clamp-3">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
