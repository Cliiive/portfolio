import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
// Local Gruvbox-dark theme for syntax highlighting
import "../styles/hljs-gruvbox.css";
import { resolveImageUrl, resolveMdLink } from "../content";
import { Link } from "react-router-dom";

type Props = {
  md: string;
  mdPath: string; // absolute Vite module path for current md (starts with /src)
};

export default function MarkdownRenderer({ md, mdPath }: Props) {
  const labelForLang = (lang?: string) => {
    if (!lang) return undefined;
    const map: Record<string, string> = {
      sh: "shell",
      bash: "shell",
      zsh: "shell",
      shell: "shell",
      console: "shell",
      plaintext: "text",
      text: "text",
      js: "javascript",
      jsx: "jsx",
      ts: "typescript",
      tsx: "tsx",
      py: "python",
      md: "markdown",
      yml: "yaml",
    };
    return map[lang] || lang;
  };

  return (
    <div className="mdx">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
        components={{
          pre({ children, ...props }: any) {
            // Attempt to read language from the child code element's className
            let lang: string | undefined;
            const first = Array.isArray(children) ? children[0] : children;
            const cls = first && (first as any).props && (first as any).props.className;
            const match = typeof cls === "string" ? cls.match(/language-([\w-]+)/) : null;
            if (match && match[1]) lang = match[1].toLowerCase();
            const label = labelForLang(lang);
            return (
              <div className="relative my-4">
                {label && (
                  <div
                    className="absolute right-2 top-2 rounded px-2 py-0.5 text-[10px] font-medium"
                    style={{ backgroundColor: "#3c3836", color: "#bdae93", border: "1px solid #504945" }}
                  >
                    {label}
                  </div>
                )}
                <pre {...props}>{children}</pre>
              </div>
            );
          },
          a({ href, children, ...props }: any) {
            const to = href ? resolveMdLink(mdPath, href as string) : undefined;
            if (to && to.startsWith("/")) {
              // Internal route
              return (
                <Link to={to} {...(props as any)}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href as string} target="_blank" rel="noreferrer" {...props}>
                {children}
              </a>
            );
          },
          img({ src, alt, ...props }: any) {
            const resolved = src ? resolveImageUrl(mdPath, String(src)) : undefined;
            return <img src={resolved || (src as string)} alt={alt as string} {...props} />;
          },
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}
