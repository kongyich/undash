const toString = Object.prototype.toString
export default function getType(value) {
  let res
  if(value == null) {
    res = value === 'undefined' ? '[object Undefined]' : '[object Null]'
  }

  res = toString.call(value)
  return res.slice(8, -1).toLowerCase()
}
