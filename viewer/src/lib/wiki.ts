import * as fs from "fs/promises";
import * as path from "path";

export type SidebarEntry = {
  section: string;
  slug: string;
  label: string;
  summary: string;
  href: string;
};

export type SidebarSection = {
  title: string;
  entries: SidebarEntry[];
};

export type WikiPage = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  frontmatter: Record<string, unknown>;
  filePath: string;
};

export type WikiIndexData = {
  sections: SidebarSection[];
  totalPages: number;
  entriesBySlug: Map<string, SidebarEntry>;
};

const ROOT_DIR = path.resolve(process.env.WIKI_ROOT ?? "/home/ck/wiki");
const INDEX_PATH = path.join(ROOT_DIR, "index.md");
const SEARCH_DIRS = ["entities", "concepts", "comparisons", "queries"];
const IGNORED_DIRS = new Set([".git", "node_modules", ".next", "viewer"]);

export function getWikiRoot() {
  return ROOT_DIR;
}

function pageHref(slug: string) {
  return `/?page=${encodeURIComponent(slug)}`;
}

function normalizeSlug(slug: string) {
  return slug.trim().replace(/^\/+|\/+$/g, "");
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walkMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  async function walk(currentDir: string) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (IGNORED_DIRS.has(entry.name)) {
        continue;
      }

      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  }

  await walk(dir);
  return files;
}

function parseScalar(value: string): unknown {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);

  return trimmed;
}

function parseList(value: string): string[] {
  const inner = value.trim().slice(1, -1);
  if (!inner.trim()) return [];

  return inner
    .split(",")
    .map((part) => part.trim().replace(/^['\"]|['\"]$/g, ""))
    .filter(Boolean);
}

function parseFrontmatter(text: string) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {} as Record<string, unknown>, content: text };
  }

  const rawFrontmatter = match[1];
  const content = text.slice(match[0].length);
  const data: Record<string, unknown> = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const colonIndex = line.indexOf(":");
    if (colonIndex < 0) {
      continue;
    }

    const key = line.slice(0, colonIndex).trim();
    const rawValue = line.slice(colonIndex + 1).trim();

    if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      data[key] = parseList(rawValue);
    } else {
      data[key] = parseScalar(rawValue);
    }
  }

  return { data, content };
}

export async function getWikiIndexData(): Promise<WikiIndexData> {
  const indexText = await fs.readFile(INDEX_PATH, "utf8");
  const lines = indexText.split(/\r?\n/);
  const sections: SidebarSection[] = [];
  const entriesBySlug = new Map<string, SidebarEntry>();
  let currentSection = "Index";

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      currentSection = heading[1].trim();
      if (!sections.some((section) => section.title === currentSection)) {
        sections.push({ title: currentSection, entries: [] });
      }
      continue;
    }

    const entryMatch = line.match(/^- \[\[([^\]]+)\]\]\s+—\s+(.+)$/);
    if (!entryMatch) {
      continue;
    }

    const slug = entryMatch[1].trim();
    const summary = entryMatch[2].trim();
    const entry: SidebarEntry = {
      section: currentSection,
      slug,
      label: slug,
      summary,
      href: pageHref(slug),
    };

    let section = sections.find((item) => item.title === currentSection);
    if (!section) {
      section = { title: currentSection, entries: [] };
      sections.push(section);
    }

    section.entries.push(entry);
    entriesBySlug.set(slug, entry);
  }

  return {
    sections,
    totalPages: entriesBySlug.size,
    entriesBySlug,
  };
}

export function pickDefaultSlug(indexData: WikiIndexData) {
  const concepts = indexData.sections.find((section) => section.title === "Concepts");
  const summaries = indexData.sections.find((section) => section.title === "Summaries");
  const entities = indexData.sections.find((section) => section.title === "Entities");

  return (
    concepts?.entries[0]?.slug ??
    summaries?.entries[0]?.slug ??
    entities?.entries[0]?.slug ??
    indexData.sections[0]?.entries[0]?.slug ??
    "README"
  );
}

export async function findPageFile(slug: string) {
  const normalized = normalizeSlug(slug);
  if (!normalized) {
    return null;
  }

  if (normalized === "README") {
    const rootReadme = path.join(ROOT_DIR, "README.md");
    if (await fileExists(rootReadme)) {
      return rootReadme;
    }
  }

  const directCandidate = path.join(ROOT_DIR, `${normalized}.md`);
  if (await fileExists(directCandidate)) {
    return directCandidate;
  }

  for (const dir of SEARCH_DIRS) {
    const searchRoot = path.join(ROOT_DIR, dir);
    if (!(await fileExists(searchRoot))) {
      continue;
    }

    const markdownFiles = await walkMarkdownFiles(searchRoot);
    const match = markdownFiles.find((filePath) => path.basename(filePath, ".md") === normalized);
    if (match) {
      return match;
    }
  }

  return null;
}

function firstHeading(markdown: string) {
  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^#\s+(.+)$/);
    if (heading) {
      return heading[1].trim();
    }
  }

  return "Untitled";
}

export async function getWikiPage(slug: string): Promise<WikiPage | null> {
  const filePath = await findPageFile(slug);
  if (!filePath) {
    return null;
  }

  const raw = await fs.readFile(filePath, "utf8");
  const parsed = parseFrontmatter(raw);
  const normalizedSlug = normalizeSlug(slug);
  const title = typeof parsed.data.title === "string" && parsed.data.title.trim().length > 0
    ? parsed.data.title.trim()
    : firstHeading(parsed.content) || normalizedSlug;

  const summary = typeof parsed.data.description === "string"
    ? parsed.data.description.trim()
    : "";

  return {
    slug: normalizedSlug,
    title,
    summary,
    content: parsed.content.trim(),
    frontmatter: parsed.data,
    filePath,
  };
}

export function renderWikiLinks(markdown: string) {
  return markdown.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, target, label) => {
    const slug = normalizeSlug(String(target));
    const text = String(label ?? target).trim();
    return `[${text}](${pageHref(slug)})`;
  });
}

export function formatValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return "";
}
