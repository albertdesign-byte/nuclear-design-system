import type { DocsNavItem } from "./navigation";

function normalizePath(value: string) {
  const [path] = value.split(/[?#]/);

  if (!path || path === "/") {
    return path || "/";
  }

  return path.replace(/\/+$/, "");
}

function isInternalHref(href: string) {
  return href.startsWith("/") && href !== "#";
}

function isSegmentMatch(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function resolveActiveNavHref(
  pathname: string,
  items: readonly Pick<DocsNavItem, "href">[]
) {
  const normalizedPathname = normalizePath(pathname);
  const candidates = items
    .filter((item) => isInternalHref(item.href))
    .map((item, index) => ({
      href: item.href,
      normalizedHref: normalizePath(item.href),
      index,
    }));

  const matches = candidates.filter((candidate) => {
    if (normalizedPathname === candidate.normalizedHref) {
      return true;
    }

    const hasChildItem = candidates.some(
      (other) =>
        other.normalizedHref !== candidate.normalizedHref &&
        other.normalizedHref.startsWith(`${candidate.normalizedHref}/`)
    );

    return (
      !hasChildItem &&
      isSegmentMatch(normalizedPathname, candidate.normalizedHref)
    );
  });

  matches.sort((left, right) => {
    const depthDifference =
      right.normalizedHref.split("/").length -
      left.normalizedHref.split("/").length;

    return (
      depthDifference ||
      right.normalizedHref.length - left.normalizedHref.length ||
      left.index - right.index
    );
  });

  return matches[0]?.href ?? null;
}
