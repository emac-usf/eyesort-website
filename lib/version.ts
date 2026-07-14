const FALLBACK_VERSION = "0.5.1";

/** Latest EyeSort release tag from GitHub (cached 1h). */
export async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/emac-usf/EyeSort/releases/latest",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return FALLBACK_VERSION;
    const data = (await res.json()) as { tag_name?: string };
    return (data.tag_name ?? FALLBACK_VERSION).replace(/^v/i, "");
  } catch {
    return FALLBACK_VERSION;
  }
}
