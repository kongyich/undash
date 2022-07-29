export function U(obj) {
  if (obj instanceof U) return obj;
  if (!(this instanceof U)) return new (U as any)(obj);
  this._wrapped = obj;
}
