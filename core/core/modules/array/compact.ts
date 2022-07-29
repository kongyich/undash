

export default function compact(array) {
  
  if(!array) return []
  let index = -1, length = array.length;
  const result = new Array(length)

  while(++index < length) {
    let value = array[index]
    if(value) result[index] = value
  }
  return result
}
