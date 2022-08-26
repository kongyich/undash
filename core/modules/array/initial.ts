import { slice } from "../../internal/_utils";


export default function initial(array, n) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null ? 1 : n)))
}
