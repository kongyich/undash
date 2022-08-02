

export default function rest(fn, startIndex?) {
  startIndex = startIndex == null ? fn.length - 1 : +startIndex

  return function() {
    let length = Math.max(arguments.length - startIndex, 0),
        rest = new Array(length),
        index = 0;
    for(; index < length; index++) {
      rest[index] = arguments[index + startIndex]
    }

    switch(startIndex) {
      case 0: return fn.call(this, rest)
      case 1: return fn.call(this, arguments[0], rest)
      case 2: return fn.call(this, arguments[0], arguments[1], rest)
    }

    let args = new Array(startIndex + 1)
    for(index = 0; index < startIndex; index++) {
      args[index] = arguments[index]
    }

    args[startIndex] = rest
    return fn.apply(this, args)
  }
}
