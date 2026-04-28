import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { renderWikiLinks } from "@/lib/wiki";

type MarkdownViewProps = {
  markdown: string;
};

const components: Components = {
  a: ({ href, children, ...props }) => {
    if (!href) {
      return <a {...props}>{children}</a>;
    }

    if (href.startsWith("/?page=")) {
      return (
        <Link href={href} className="wiki-link">
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  },
  blockquote: ({ children }) => <blockquote className="wiki-blockquote">{children}</blockquote>,
  code: ({ inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code className="wiki-inline-code" {...props}>
          {children}
        </code>
      );
    }

    return (
      <pre className="wiki-pre">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  h1: ({ children }) => <h1 className="wiki-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="wiki-h2">{children}</h2>,
  h3: ({ children }) => <h3 className="wiki-h3">{children}</h3>,
  h4: ({ children }) => <h4 className="wiki-h4">{children}</h4>,
  hr: () => <hr className="wiki-hr" />,
  li: ({ children }) => <li className="wiki-li">{children}</li>,
  ol: ({ children }) => <ol className="wiki-ol">{children}</ol>,
  p: ({ children }) => <p className="wiki-p">{children}</p>,
  table: ({ children }) => <div className="wiki-table-wrap"><table className="wiki-table">{children}</table></div>,
  td: ({ children }) => <td className="wiki-td">{children}</td>,
  th: ({ children }) => <th className="wiki-th">{children}</th>,
  tr: ({ children }) => <tr className="wiki-tr">{children}</tr>,
  ul: ({ children }) => <ul className="wiki-ul">{children}</ul>,
};

export function MarkdownView({ markdown }: MarkdownViewProps) {
  const rendered = renderWikiLinks(markdown);

  return (
    <article className="wiki-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {rendered}
      </ReactMarkdown>
    </article>
  );
}
