/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */
/**
 * Generates a rounded random number within a specified range.
 * @param {number} limit - The upper limit for the random number (exclusive).
 * @returns {number} - The generated random number.
 */
function generateRandomNumberInRange(limit) {
  return Math.floor(Math.random() * limit);
}
export default generateRandomNumberInRange;
