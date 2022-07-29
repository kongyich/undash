

export default function setToArray(set) {
  let result = new Array(set.size)
  let index = -1

  set.forEach(value => {
    result[++index] = value
  })
  return result
}
