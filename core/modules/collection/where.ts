
import filter from './filter'
import matcher from './matcher'

export default function where(collection, attrs) {
  return filter(collection, matcher(attrs))
}

