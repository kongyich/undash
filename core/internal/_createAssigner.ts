
export default function createAssigner(keys) {
  return function(obj) {
    let length = arguments.length
    if(length < 2 || obj == null) return obj
    for(let i = 1; i < length; i++) {
      let source = arguments[i]
      let _keys = keys(source)
      let len = _keys.length

      for(let j = 0; j < len; j++) {
        let key = _keys[j]
        if(obj[key] === void 0) obj[key] = source[key]
      }
    }
    return obj
  }
}
