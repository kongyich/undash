import getType from "../modules/function/getType"

export default function _clone(value, deep, map?) {
  
  if (_isPrimitive(value)) {
    return value;
  }
  // 67
  let copy = function(copiedValue) {
    for(let key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        copiedValue[key] = deep ? _clone(value[key], true, map) : value[key]
      }
    }
    return copiedValue
  }

  switch(getType(value)) {
    case 'object': 
      return copy(Object.create(Object.getPrototypeOf(value)))
    case 'array':
      return copy([])
  }
  return value;
}


const _isPrimitive = function(value) {
  let type = typeof value
  return value == null || (type !== 'object' && type !== 'function')
}
