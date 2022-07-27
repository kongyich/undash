
/**
 * @param {Number} start 
 * @param {Number} stop 
 * @param {Number} step 
 * @returns {Array}
*/
export default function range(start, stop, step) {
  if(!stop) {
    stop = start || 0
    start = 0
  }

  if(!step) {
    step = stop < start ? -1 : 1
  }

  let length = Math.max(Math.ceil((stop - start) / step), 0) 
  let result = new Array(length)

  for(let index = 0; index < length; index++, start += step) {
    result[index] = start
  }
  return result
}
