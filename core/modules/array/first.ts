import initial from "./initial"

// [1, 2, 3, 4, 6] 5 2
export default function first(array, n) {
  if(array == null || array.length < 1) return void 0
  if(n == null) return array[0]
  return initial(array, array.length - n)
}
