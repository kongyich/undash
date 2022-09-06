import baseCreate from "./_baseCreate"
import isObject from "./_isObject"


export default function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if(!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args)

  let self = baseCreate(sourceFunc.prototype)
  let result = sourceFunc.apply(self, args)
  if(isObject(result)) return result
  return self
}
