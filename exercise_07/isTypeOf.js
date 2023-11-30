/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */
/**
 * Checks if the type of a value matches the specified type.
 * Arrays are treated separately using Array.isArray().
 * @param {any} value - The input value to check.
 * @param {string} type - The type to compare against ('string', 'number', 'boolean', 'array').
 * @returns {boolean} - Indicates if the type of the value matches the provided type.
 */
function isTypeOf(value, type) {
  if (type === "array") {
    return Array.isArray(value);
  }
  return typeof value === type;
}

export default isTypeOf;