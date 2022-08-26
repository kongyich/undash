import pluck from "../collection/pluck"

export default function unzip(array) {
  let length = array.length
  let res = Array(length)

  for(let i = 0; i < length; i++) {
    res[i] = pluck(array, i)
  }

  return res
}
