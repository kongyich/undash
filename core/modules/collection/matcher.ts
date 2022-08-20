import extendOwn from "./extendOwn"
import isMatch from "./isMatch"

export default function matcher(attrs) {
  attrs = extendOwn({}, attrs)
  
  return function(obj) {
    return isMatch(obj, attrs)
  }
}
