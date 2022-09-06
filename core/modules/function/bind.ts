import rest from '../collection/rest'
import isFunction from '../../internal/_isFunction'
import executeBound from '../../internal/_executeBound'

export default rest(function(func, context, args) {
  if (!isFunction(func)) return false
  let bound = rest(function(callArgs) {
    return executeBound(func, bound, context, this, args.concat(callArgs))
  })

  return bound
})
