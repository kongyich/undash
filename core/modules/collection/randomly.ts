import { isArray, values } from "../../internal/_utils";
import random from "../function/random";
import toArray from "../function/toArray";


export default function randomly(collection, num) {
  if(num == null) {
    collection = !isArray(collection) ? values(collection) : toArray(collection)
    return collection[random(collection.length - 1)]
  }

  let sample = toArray(collection)
  let length = sample.length

  let n = Math.max(Math.min(num, length), 0)
  let last = length - 1

  for(let index = 0; index < n; index++) {
    let rand = random(index, last)
    let temp = collection[index]
    collection[index] = collection[rand]
    collection[rand] = temp
  }
  return collection.slice(0, n)
  
}
