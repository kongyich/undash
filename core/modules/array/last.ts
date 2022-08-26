import sliceRight from "./sliceRight"


export default function last(array, n) {
  if(array == null || array.length < 1) return void 0
  if(n == null) return array[array.length - 1]
  return sliceRight(array, Math.max(0, array.length - n))
}
