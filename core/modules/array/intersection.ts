import contains from "../collection/contains"


export default function intersection(array) {
  let res: Array<any> = []
  let length = arguments.length

  for(let i = 0; i < array.length; i++) {
    let item = array[i]
    if(contains(res, item)) continue

    let j
    for(let j = 1; j < length; j++) {
      if(!contains(arguments[j], item)) break
    }
    if(j === length) res.push(item)
  }

  return res
}
