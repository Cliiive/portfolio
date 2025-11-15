import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveImageUrl, resolveMdLink } from "../content";
import { Link } from "react-router-dom";

type Props = {
  md: string;
  mdPath: string; // absolute Vite module path for current md (starts with /src)
};

export default function MarkdownRenderer({ md, mdPath }: Props) {
  return (
    <div className="mdx">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
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
          code({ inline, className, children, ...props }: any) {
            const content = String(children).replace(/\n$/, "");
            if (inline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-slate-800/70 text-slate-100" {...props}>
                  {content}
                </code>
              );
            }
            return (
              <pre className="bg-slate-900/70 rounded-lg p-4 overflow-auto">
                <code className={className}>{content}</code>
              </pre>
            );
          },
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}
