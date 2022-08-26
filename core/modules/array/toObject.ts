
export default function toObject(list, values) {
  let res = {}

  for(let i = 0; i < list.length; i++) {
    if(values) {
      res[list[i]] = values[i]
    } else {
      res[list[i][0]] = values[i][1]
    }
  }

  return res
}
