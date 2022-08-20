
export default function values(obj) {
  if(obj == null) return []

  return Object.keys(obj).map(key => obj[key])
}
