

export default function mapToArray(map) {
  let result = new Array(map.size)
  let index = -1

  map.forEach((value, key) => {
    result[++index] = [key, value]
  });
  return result
}
