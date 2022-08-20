import group from "../../internal/_group";

export default group(function(result, value, key) {
  result[key] = value
})
