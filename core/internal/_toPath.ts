

export default function toPath(path) {
  return Array.isArray(path) ? path : [path];
}
