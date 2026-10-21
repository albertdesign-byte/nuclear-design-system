export type DocsTocEntry = {
  id: string;
  label: string;
  level: 2 | 3;
};

export type DocsTocItem = {
  id: string;
  label: string;
  children?: DocsTocItem[];
};

const EXCLUDE_SELECTOR = "[data-toc-exclude], article";

export function slugifyHeadingId(value: string) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

export function labelFromHeadingId(id: string) {
  return id
    .split("-")
    .filter(Boolean)
    .map((part) => (part === "api" ? "API" : part.charAt(0).toUpperCase() + part.slice(1)))
    .join(" ");
}

export function uniqueHeadingId(base: string, used: Set<string>) {
  const normalized = slugifyHeadingId(base);

  if (!used.has(normalized)) {
    used.add(normalized);
    return normalized;
  }

  let n = 2;
  while (used.has(`${normalized}-${n}`)) {
    n += 1;
  }

  const id = `${normalized}-${n}`;
  used.add(id);
  return id;
}

export function nestDocsTocItems(entries: DocsTocEntry[]): DocsTocItem[] {
  const roots: DocsTocItem[] = [];
  let current: DocsTocItem | null = null;

  for (const entry of entries) {
    if (entry.level <= 2) {
      current = { id: entry.id, label: entry.label };
      roots.push(current);
      continue;
    }

    if (!current) {
      roots.push({ id: entry.id, label: entry.label });
      continue;
    }

    current.children = current.children ?? [];
    current.children.push({ id: entry.id, label: entry.label });
  }

  return roots;
}

export function flattenDocsTocItems(items: DocsTocItem[]): DocsTocItem[] {
  return items.flatMap((item) => [item, ...(item.children ?? [])]);
}

export function pickActiveSectionId(
  items: Array<{ id: string; top: number; isIntersecting: boolean }>
) {
  const visible = items.filter((item) => item.isIntersecting);

  if (visible.length === 0) {
    return null;
  }

  visible.sort((left, right) => left.top - right.top);
  return visible[0]?.id ?? null;
}

export function resolveDocsScrollBehavior(prefersReducedMotion: boolean): ScrollBehavior {
  return prefersReducedMotion ? "auto" : "smooth";
}

export function docsSectionScrollBehavior(): ScrollBehavior {
  return resolveDocsScrollBehavior(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToDocsSection(
  id: string,
  behavior: ScrollBehavior = docsSectionScrollBehavior()
) {
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function navigateToDocsSection(id: string) {
  const nextHash = `#${id}`;

  if (window.location.hash !== nextHash) {
    history.pushState(null, "", nextHash);
  }

  return scrollToDocsSection(id);
}

function headingLabel(node: HTMLElement) {
  return (node.textContent ?? "").trim();
}

function isExcluded(node: Element) {
  return Boolean(node.closest(EXCLUDE_SELECTOR));
}

function sectionHasOwnTocHeading(section: HTMLElement) {
  for (const heading of section.querySelectorAll("h2, h3")) {
    if (isExcluded(heading) || heading.closest("section") !== section) {
      continue;
    }

    return true;
  }

  return false;
}

export function collectDocsTocEntries(root: ParentNode): DocsTocEntry[] {
  const used = new Set<string>();
  const entries: DocsTocEntry[] = [];
  const nodes = root.querySelectorAll("section[id], h2, h3");

  for (const node of nodes) {
    if (!(node instanceof HTMLElement) || isExcluded(node)) {
      continue;
    }

    if (node.tagName === "SECTION") {
      if (!node.id || sectionHasOwnTocHeading(node)) {
        continue;
      }

      if (used.has(node.id)) {
        continue;
      }

      used.add(node.id);
      entries.push({
        id: node.id,
        label: labelFromHeadingId(node.id),
        level: 2,
      });
      continue;
    }

    const label = headingLabel(node);
    if (!label) {
      continue;
    }

    const level: 2 | 3 = node.tagName === "H3" ? 3 : 2;
    const inheritedId = node.id || node.closest("section")?.id || "";
    let id = inheritedId;

    if (!id || used.has(id)) {
      if (inheritedId && node.id === inheritedId && used.has(inheritedId)) {
        continue;
      }

      id = uniqueHeadingId(node.id || label, used);
      if (!node.id) {
        node.id = id;
        node.classList.add("docs-toc-target");
      }
    } else {
      used.add(id);
    }

    entries.push({ id, label, level });
  }

  return entries;
}
