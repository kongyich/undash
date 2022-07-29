

export default function copyArray(source, array?) {
  let index = -1
  let length = source.length

  array || (array = new Array(length))
  while(++index < length) {
    array[index] = source[index]
  }
  return array
}
