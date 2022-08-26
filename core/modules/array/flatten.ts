import _flatten from "../../internal/_flatten"

export default function flatten(array, depth?) {
  return _flatten(array, depth, false);
}
