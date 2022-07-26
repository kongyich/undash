import filter from './filter'
import negate from '../function/negate'

export default function reject(collection, iteratee, context) {
  return filter(collection, negate(iteratee), context)
}
