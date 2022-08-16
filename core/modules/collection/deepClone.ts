import _clone from "../../internal/_clone";

export default function deepClone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, true)
}
