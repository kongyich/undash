import castPath from "../../internal/_castPath";
import toKey from "../../internal/_toKey";
import isLength from '../../internal/_isLength'

const hasOwnProperty = Object.prototype.hasOwnProperty
export default function hasPath(object, path) {
  path = castPath(path, object)

  let index = -1, { length } = path, result = false, key;

  while(++index < length) {
    key = toKey(path[index])
    if(!(result = object != null && hasOwnProperty.call(object, key))) break

    object = object[key]
  }

  if(result || ++index != length) return result

  length = object == null ? 0 : object.length
  // return !!length && isLength(length) && isIndex(key, length) && (Array.isArray(object) || isArguments(object))
}
