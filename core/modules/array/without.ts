import rest from '../collection/rest'
import difference from './difference'

export default rest(function(array, otherArray) {
  return difference(array, otherArray)
})
