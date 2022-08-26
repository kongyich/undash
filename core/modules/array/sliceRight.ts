import { slice } from "../../internal/_utils";


export default function sliceRight(array, n) {
  return slice.call(array, n == null ? 1 : n)
}
