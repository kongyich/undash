import getType from "../modules/function/getType"

export default function isString(value) {
  const type = typeof value
  return type === 'string' || (type === 'object' && value !== null && !Array.isArray(value) && getType(value) === 'string')
}
