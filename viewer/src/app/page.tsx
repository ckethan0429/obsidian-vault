import * as path from "path";
import { Sidebar } from "@/components/sidebar";
import { MarkdownView } from "@/components/markdown-view";
import {
  formatValue,
  getWikiIndexData,
  getWikiPage,
  getWikiRoot,
  pickDefaultSlug,
} from "@/lib/wiki";

type SearchParams = Promise<{ page?: string }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const indexData = await getWikiIndexData();
  const requestedSlug = typeof resolvedSearchParams.page === "string" ? resolvedSearchParams.page.trim() : "";
  const defaultSlug = pickDefaultSlug(indexData);
  const slugToLoad = requestedSlug || defaultSlug;

  let page = await getWikiPage(slugToLoad);
  let activeSlug = slugToLoad;

  if (!page && defaultSlug && slugToLoad !== defaultSlug) {
    page = await getWikiPage(defaultSlug);
    activeSlug = defaultSlug;
  }

  const rootPath = getWikiRoot();

  return (
    <main className="viewer-shell">
      <Sidebar sections={indexData.sections} activeSlug={activeSlug} totalPages={indexData.totalPages} />

      <section className="content-panel">
        <header className="content-header">
          <div>
            <div className="content-eyebrow">Durable wiki</div>
            <h1>{page?.title ?? "Select a wiki page"}</h1>
            <p>
              {page?.summary || "The body panel renders the selected durable wiki page from the indexed vault."}
            </p>
          </div>

          <div className="content-meta-card">
            <div>
              <span>Root</span>
              <strong>{rootPath}</strong>
            </div>
            <div>
              <span>Selected</span>
              <strong>{activeSlug}</strong>
            </div>
          </div>
        </header>

        {page ? (
          <>
            <section className="content-details">
              <div>
                <span>File</span>
                <strong>{path.relative(rootPath, page.filePath)}</strong>
              </div>
              {page.frontmatter.updated ? (
                <div>
                  <span>Updated</span>
                  <strong>{formatValue(page.frontmatter.updated)}</strong>
                </div>
              ) : null}
              {page.frontmatter.tags ? (
                <div>
                  <span>Tags</span>
                  <strong>{formatValue(page.frontmatter.tags)}</strong>
                </div>
              ) : null}
              {page.frontmatter.sources ? (
                <div>
                  <span>Sources</span>
                  <strong>{formatValue(page.frontmatter.sources)}</strong>
                </div>
              ) : null}
            </section>

            <MarkdownView markdown={page.content} />
          </>
        ) : (
          <div className="empty-state">
            <h2>No page found</h2>
            <p>
              The selected page could not be resolved. Check the index entry or open a different page from the sidebar.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
