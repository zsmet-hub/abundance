// Public repository and default branch verified before publication.
export const sourceRepository = null;
export const sourceBranch = 'main';
export function appSourceURL(id) {
  if (!sourceRepository || !/^[a-z][a-z0-9-]*$/.test(id)) return null;
  return `${sourceRepository}/tree/${encodeURIComponent(sourceBranch)}/apps/${encodeURIComponent(id)}`;
}
