
/**
 * @param {String} string 
 * @param {String} target 
 * @param {Number} position
 * @returns {Boolean}
*/

export default function startIs(string, target, position) {
  const { length } = string
  position = position == null ? 0 : Math.min(Math.max(position, 0), length)

  return string.slice(position, position + target.length) == target
}
