import matter from "gray-matter";

export type ContentType = "project" | "writeup";

export type ContentItem = {
  type: ContentType;
  slug: string;
  title: string;
  description?: string;
  tags: string[];
  path: string; // Vite module path starting with /src
  content: string;
};

const mdModules = import.meta.glob("/src/content/**/*.{md,markdown}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const assetModules = import.meta.glob("/src/content/**/*.{png,jpg,jpeg,gif,svg,webp}", {
  query: "?url",
  import: "default",
  eager: true,
});

const imageUrlMap = new Map<string, string>();
for (const [key, url] of Object.entries(assetModules)) {
  imageUrlMap.set(normalizePath(key), url as unknown as string);
}

function normalizePath(p: string) {
  return p.replace(/\\/g, "/");
}

function pathDirname(p: string) {
  const n = normalizePath(p);
  const idx = n.lastIndexOf("/");
  return idx >= 0 ? n.slice(0, idx) : "";
}

function joinPath(a: string, b: string) {
  return normalizePath(a.replace(/\/$/, "") + "/" + b.replace(/^\//, ""));
}

export function resolveImageUrl(fromMdPath: string, relSrc: string): string | undefined {
  const base = pathDirname(fromMdPath);
  const absolute = normalizePath(joinPath(base, relSrc));
  // Try direct match first
  if (imageUrlMap.has(absolute)) return imageUrlMap.get(absolute);
  // Also try without leading /src if present
  const alt = absolute.startsWith("/src/") ? absolute : `/src/${absolute.replace(/^\//, "")}`;
  if (imageUrlMap.has(alt)) return imageUrlMap.get(alt);
  return undefined;
}

function toTypeFromPath(path: string): ContentType | undefined {
  const n = normalizePath(path);
  if (n.includes("/content/projects/")) return "project";
  if (n.includes("/content/writeups/")) return "writeup";
  return undefined;
}

function slugFromPath(path: string) {
  const n = normalizePath(path);
  const file = n.split("/").pop() || "";
  return file.replace(/\.(md|markdown)$/i, "");
}

const allItems: ContentItem[] = Object.entries(mdModules)
  .map(([path, raw]) => {
    const type = toTypeFromPath(path);
    if (!type) return undefined;
    const parsed = matter(String(raw));
    const data = parsed.data as any;
    const title: string = data?.title || slugFromPath(path);
    const description: string | undefined = data?.description;
    const tags: string[] = Array.isArray(data?.tags)
      ? data.tags.map(String)
      : typeof data?.tags === "string"
      ? String(data.tags)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
    return {
      type,
      slug: slugFromPath(path),
      title,
      description,
      tags,
      path: normalizePath(path),
      content: parsed.content.trim(),
    } satisfies ContentItem;
  })
  .filter(Boolean) as ContentItem[];

const projects = allItems.filter((i) => i.type === "project");
const writeups = allItems.filter((i) => i.type === "writeup");

export function getAll(type: ContentType): ContentItem[] {
  return type === "project" ? projects : writeups;
}

export function getBySlug(type: ContentType, slug: string): ContentItem | undefined {
  const list = type === "project" ? projects : writeups;
  return list.find((i) => i.slug === slug);
}

export function routeFor(item: ContentItem): string {
  return item.type === "project" ? `/projects/${item.slug}` : `/writeups/${item.slug}`;
}

export function resolveMdLink(currentMdPath: string, href: string): string | undefined {
  // If it's an absolute http(s) link, keep it
  if (/^https?:\/\//i.test(href)) return href;
  // If it's an anchor link
  if (href.startsWith("#")) return href;
  // Build absolute path relative to current md
  const base = pathDirname(currentMdPath);
  const absolute = normalizePath(joinPath(base, href));
  // Normalize removing any hash for slugging
  const [pathOnly] = absolute.split("#");
  // If it points to a .md within content, map to route
  if (/\.(md|markdown)$/i.test(pathOnly)) {
    return mdPathToRoute(pathOnly);
  }
  // If it points to a directory-like path without extension, try adding .md
  if (!/\.[a-zA-Z0-9]+$/.test(pathOnly)) {
    const withMd = `${pathOnly}.md`;
    const route = mdPathToRoute(withMd);
    if (route) return route;
  }
  // Otherwise leave as-is (could be image or external)
  return href;
}

export function routeFromMdPath(mdPath: string): string | undefined {
  return mdPathToRoute(mdPath);
}

function mdPathToRoute(p: string): string | undefined {
  const normalized = p.startsWith("/src/") ? p : `/src/${p.replace(/^\//, "")}`;
  return routeFromPath(normalized);
}

function routeFromPath(p: string): string | undefined {
  const type = toTypeFromPath(p);
  if (!type) return undefined;
  const slug = slugFromPath(p);
  return type === "project" ? `/projects/${slug}` : `/writeups/${slug}`;
}
