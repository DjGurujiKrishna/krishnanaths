function getGoogleDriveFileId(url: string): string | null {
  try {
    const parsed = new URL(url, "http://localhost");
    const host = parsed.hostname.replace(/^www\./, "");
    if (!host.endsWith("drive.google.com") && !host.endsWith("docs.google.com")) {
      return null;
    }

    const fileMatch = parsed.pathname.match(/\/(?:file|document|presentation)\/d\/([^/]+)/);
    if (fileMatch?.[1]) return fileMatch[1];

    return parsed.searchParams.get("id");
  } catch {
    return null;
  }
}

export function getResumePreviewUrl(url: string) {
  const id = getGoogleDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function getResumeDownloadUrl(url: string) {
  const id = getGoogleDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

export function getResumeOpenUrl(url: string) {
  const id = getGoogleDriveFileId(url);
  if (!id) return url;
  return `https://drive.google.com/file/d/${id}/view`;
}
