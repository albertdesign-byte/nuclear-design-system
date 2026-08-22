export function fileMatchesAccept(file: File, accept?: string): boolean {
  if (!accept?.trim()) {
    return true;
  }

  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();

  return accept.split(",").some((rawToken) => {
    const token = rawToken.trim().toLowerCase();

    if (!token) {
      return false;
    }

    if (token.startsWith(".")) {
      return name.endsWith(token);
    }

    if (token.endsWith("/*")) {
      return type.startsWith(token.slice(0, -1));
    }

    return type === token;
  });
}

export function formatMaxSizeLabel(maxSize: number): string {
  const megabyte = 1024 * 1024;
  const kilobyte = 1024;

  if (maxSize >= megabyte) {
    const megabytes = maxSize / megabyte;
    const label = Number.isInteger(megabytes)
      ? String(megabytes)
      : String(Math.round(megabytes * 10) / 10);
    return `${label} MB`;
  }

  if (maxSize >= kilobyte) {
    const kilobytes = maxSize / kilobyte;
    const label = Number.isInteger(kilobytes)
      ? String(kilobytes)
      : String(Math.round(kilobytes * 10) / 10);
    return `${label} KB`;
  }

  return `${maxSize} bytes`;
}

export function getRejectedFileError(
  file: File,
  options: { accept?: string; maxSize?: number }
): string | undefined {
  if (options.maxSize !== undefined && file.size > options.maxSize) {
    return `File must be under ${formatMaxSizeLabel(options.maxSize)}.`;
  }

  if (!fileMatchesAccept(file, options.accept)) {
    return "File type is not accepted.";
  }

  return undefined;
}
