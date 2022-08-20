export const isArray = obj => Array.isArray(obj)

export const keys = obj => Object.keys(obj)

export const values = obj => Object.values(obj)

export const hasOwnProperty = Object.prototype.hasOwnProperty

export const has = function(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
