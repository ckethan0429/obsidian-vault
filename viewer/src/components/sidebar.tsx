import Link from "next/link";
import type { SidebarSection } from "@/lib/wiki";

type SidebarProps = {
  sections: SidebarSection[];
  activeSlug: string;
  totalPages: number;
};

export function Sidebar({ sections, activeSlug, totalPages }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__eyebrow">CK Wiki Viewer</div>
        <h1>Obsidian-style index</h1>
        <p>
          {totalPages} pages · sidebar = index.md · body = durable wiki note
        </p>
      </div>

      <nav className="sidebar__nav" aria-label="Wiki index">
        {sections.map((section) => (
          <details key={section.title} className="sidebar__section" open>
            <summary>{section.title}</summary>
            <ul>
              {section.entries.map((entry) => {
                const isActive = entry.slug === activeSlug;
                return (
                  <li key={`${section.title}:${entry.slug}`} className={isActive ? "is-active" : ""}>
                    <Link href={entry.href} className="sidebar__link">
                      <span className="sidebar__title">{entry.label}</span>
                      <span className="sidebar__summary">{entry.summary}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </nav>
    </aside>
  );
}
