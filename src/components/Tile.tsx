import { Link } from "react-router-dom";

export type TileProps = {
  to: string;
  title: string;
  description?: string;
  tags?: string[];
};

export default function Tile({ to, title, description, tags }: TileProps) {
  const badgeVariants = [
    "border-[#d79921]/40 bg-[#d79921]/10 text-[#d79921]", // yellow
    "border-[#fe8019]/40 bg-[#fe8019]/10 text-[#fe8019]", // orange
    "border-[#b16286]/40 bg-[#b16286]/10 text-[#b16286]", // purple
    "border-[#8ec07c]/40 bg-[#8ec07c]/10 text-[#8ec07c]", // aqua
  ];
  return (
    <Link
      to={to}
      className="block rounded-lg border p-4 focus:outline-none focus:ring-2"
      style={{
        borderColor: '#3c3836',
        backgroundColor: '#282828',
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#504945';
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#32302f';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = '#3c3836';
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#282828';
      }}
    >
      <h3 className="text-lg font-semibold" style={{ color: '#fbf1c7' }}>{title}</h3>
      {description && (
        <p className="mt-2 text-sm line-clamp-3" style={{ color: '#bdae93' }}>{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={t}
              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs ${badgeVariants[i % badgeVariants.length]}`}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
