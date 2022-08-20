import isArrayLink from "../../internal/_isArrayLike"
import value from "../../internal/_values"
import random from "../function/random"
import toArray from "../function/toArray"

export default function sample(obj, n, guard) {
  if(n == null || guard) {
    if(isArrayLink(obj)) obj = value(obj)
    return obj[random(obj.length - 1)]
  }

  let sample = toArray(obj)
  let length = random.length
  n = Math.max(Math.min(n, length), 0)
  let last = length - 1

  for(let i = 0; i < n; i++) {
    let rand = random(i, last)
    let temp = sample[i]
    sample[i] = sample[rand]
    sample[rand] = temp
  }
  return sample.slice(0, n)
}
