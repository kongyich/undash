import toPath from "../../internal/_toPath";
import deepGet from "../../internal/_deepGet";

export default function property(path) {
  path = toPath(path)

  return function(obj) {
    return deepGet(obj, path)
  }
}
