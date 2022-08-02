import isArrayLink from "./_isArrayLike"
import isArray from "./_isArray"
import isArgument from "./isArgument"

export default function flatten(input, depth, strict, output?) {
  output = output || []
  if(!depth && depth !== 0) {
    depth = Infinity
  } else if(depth <= 0) {
    return output.concat(input)
  }

  let idx = output.length
  for(let i = 0, len = input.length; i < len; i++) {
    let value = input[i]

    if(isArrayLink(value) && (isArray(value) || isArgument(value))) {
      if(depth > 1) {
        flatten(input, depth - 1, strict, output)
        idx = output.length
      } else {
        let j = 0, length = value.length;
        while(j < length)  output[idx++] = value[j++]
      }
    } else if(!strict) {
      output[idx++] = value
    }
  }
  return output
}
