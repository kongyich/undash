export default function createFindIndex(step) {
  return function(collection, iteratee, context) {
    let index = step > 0 ? 0 : collection.length - 1
    let length = collection.length
    for(; index >= 0 && index < length; index += step) {
      if(iteratee.call(context, collection[index], index, collection)) return index
    }

    return -1
  }
}
