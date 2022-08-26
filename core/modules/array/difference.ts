import contains from "../collection/contains";
import filter from "../collection/filter";
import rest from "../collection/rest";
import flatten from "./flatten";


export default rest(function(array, rest) {
  rest = flatten(rest, true)

  return filter(array, function(value) {
    return !contains(rest, value)
  })
})
