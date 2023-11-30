/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * Counts the total number of words in a string.
 * @param {string} sentence - The input string.
 * @returns {number} - The total number of words.
 */
function getTotalWordsFromString(sentence) {
  const wordsArray = sentence.trim().split(/\s+/);
  return wordsArray.length;
}
export default getTotalWordsFromString;
