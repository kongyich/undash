export default function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, index) {
    let i = 0, length = array.length;

    if(typeof index === 'number') {
      if(dir > 0) {
        i = index >= 0 ? index : Math.max(index + length, 0)
      }
    } else if(sortedIndex && index && length) {
      index = sortedIndex(array, item)
      return array[index] === item ? index : -1
    }

    if(item !== item) {
      index = predicateFind(array.slice(i, length), isNaN)
      return index >= 0 ? index + i : -1
    }

    for(index = dir > 0 ? i : length - 1; index >=0 && index < length; index += dir) {
      if(array[index] === item) return index
    }
    return -1
  }
}
