import group from "../../internal/_group";
import { has } from "../../internal/_utils";

export default group(function(result, key, value) {
  if(has(result, key)) result[key].push(value); else result[key] = [value]
})
