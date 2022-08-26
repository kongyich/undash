import rest from "../collection/rest";
import uniq from "./uniq";
import flattan from './flatten'


export default rest(function(arrays) {
  return uniq(flattan(arrays, true))
})
