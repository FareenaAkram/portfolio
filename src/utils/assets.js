/**
 * Prepend Vite's BASE_URL so public-folder assets resolve correctly
 * both on localhost (base = '/') and GitHub Pages (base = '/portfolio/').
 *
 * Usage: img('images/profile.png') → '/images/profile.png' (dev)
 *                                  → '/portfolio/images/profile.png' (prod)
 */
export function img(relativePath) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = relativePath.replace(/^\//, '');
  return `${base}/${clean}`;
}
