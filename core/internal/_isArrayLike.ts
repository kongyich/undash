import isLength from "./_isLength";


export default function isArrayLink(value) {
  return value !== null && typeof value !== 'function' && isLength(value.length)
}
