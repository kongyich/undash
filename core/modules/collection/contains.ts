import isArrayLink from "../../internal/_isArrayLike";
import values from "../../internal/_values";
import indexOf from "../array/indexOf";

export default function contains(collection, item, fromIndex?) {
  if(!isArrayLink(collection)) return values(collection)
  if(typeof fromIndex !== 'number') fromIndex = 0

  return indexOf(collection, item, fromIndex) >= 0
}
