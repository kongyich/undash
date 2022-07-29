
const MAX_ARRAY_LENGTH = Math.pow(2, 53) - 1;
export default function isLength(length) {
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_LENGTH
}
