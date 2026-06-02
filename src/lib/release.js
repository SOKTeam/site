// Fetches the latest GitHub release for S.O.K at build time so the download
// URL, version and file size stay in sync with the published release.
// Falls back to known-good values if the API is unreachable during the build.

const REPO = 'SOKTeam/S.O.K';

const FALLBACK = {
  version: '1.1.0',
  url: 'https://github.com/SOKTeam/S.O.K/releases/download/v1.1.0/SOK_Setup_v1.1.0.exe',
  size: '31 MB',
};

function formatSize(bytes) {
  if (!bytes) return FALLBACK.size;
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

export async function getLatestRelease() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

    const data = await res.json();
    const asset = data.assets?.find((a) => a.name.endsWith('.exe'));
    if (!asset) throw new Error('No .exe asset found in latest release');

    return {
      version: data.tag_name.replace(/^v/, ''),
      url: asset.browser_download_url,
      size: formatSize(asset.size),
    };
  } catch (err) {
    console.warn(`[release] Falling back to defaults: ${err.message}`);
    return FALLBACK;
  }
}

// Fetches every published release so the archive page can list past versions.
// Drafts and pre-releases are kept out; returns [] if the API is unreachable.
export async function getAllReleases() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=100`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

    const data = await res.json();

    return data
      .filter((r) => !r.draft && !r.prerelease)
      .map((r) => {
        const asset = r.assets?.find((a) => a.name.endsWith('.exe'));
        return {
          version: r.tag_name.replace(/^v/, ''),
          tag: r.tag_name,
          date: r.published_at,
          notesUrl: r.html_url,
          url: asset?.browser_download_url ?? null,
          size: asset ? formatSize(asset.size) : null,
        };
      });
  } catch (err) {
    console.warn(`[release] Could not load release history: ${err.message}`);
    return [];
  }
}
