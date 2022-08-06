
export default function sortIndex(array, value, iteratee, context) {
  value = iteratee.call(context, value)
  let low = 0, high = array.length;
  while(low < high) {
    let mid = Math.floor((high + low) / 2)
    if(iteratee.call(context, array[mid]) < value) low = mid + 1; else high = mid
  }
  return low
}
