import getType from "../modules/function/getType";


export default function isBoolean(obj) {
  return obj === true || obj === false || getType(obj) === 'boolean'
} 
