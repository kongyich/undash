

export default function cloneArray(source, res?) {
  let index = -1
  let length = source.length

  res || (res = new Array(length))

  while(++index < length) {
    res[index] = source[index]
  }
  return res
}
