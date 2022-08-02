
export default function createAssign(keysFn, defaults?) {
  return function(obj) {
    let length = arguments.length
    if(length < 2 || obj == null) return obj

    for(let i = 1; i < length; i++) {
      let source = arguments[i], keys = keysFn(source), len = keys.length;

      for(let j = 0; j < len; j++) {
        let key = keys[j]
        if(obj[key] === void 0) obj[key] = source[key]
      }
    }
    return obj
  }
}
