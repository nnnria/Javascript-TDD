/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */
/**
 * Checks if the addition of two numbers is greater than or equal to 50.
 * @param {number} summand1 - The first number to be added.
 * @param {number} summand2 - The second number to be added.
 * @returns {boolean} - Indicates if the sum is greater than or equal to 50.
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
  return summand1 + summand2 >= 50;
}
export default isAdditionGreaterThanFifty;
