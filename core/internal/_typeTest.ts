import getType from "../modules/function/getType"

export default function typeTest(name) {
  return function(obj) {
    return getType(obj) === name
  }
}
