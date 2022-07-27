

export default function iteratorToArray(iterator) {
  let data, result = new Array();

  while(!(data = iterator.next()).done) {
    result.push(data.value)
  }
  return result
}
