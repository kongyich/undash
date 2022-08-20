import map from './map'
import property from './property'

export default function pluck(obj, key) {
  return map(obj, property(key))
}
