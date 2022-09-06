import isObject from "./_isObject";


function ctor() {
  return function() {}
}
export default function baseCreate(proto) {
  if(!isObject(proto)) return {}

  let Ctor = ctor()
  Ctor.prototype = proto
  let result = new Ctor
  Ctor.prototype = null
  return result
}
