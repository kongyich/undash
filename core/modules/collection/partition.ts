import group from "../../internal/_group";

export default group(function(result, value, pass) {
  result[pass ? 0 : 1].push(value)
}, true)
