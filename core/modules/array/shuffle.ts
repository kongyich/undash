import copyArray from "../../internal/_copyArray";


export default function shuffle(array) {
  let length = array == null ? 0 : array.length
  if(!length) return []

  let index = -1, lastIndex = length - 1, result = copyArray(array);

  while(++index < lastIndex) {
    let rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}
