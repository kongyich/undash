import isKey from "./_isKey"
import stringToArray from "./_stringToArray"

export default function castPath(value, object) {
  if(Array.isArray(value)) return value

  return isKey(value, object) ? [value] : stringToArray(value)
}
