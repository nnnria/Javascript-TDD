import getTotalWordsFromString from "../exercise_02/getTotalWordsFromString.js";
import isGreaterThan from "../exercise_04/isGreaterThan.js";

/**
 * Write JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */
/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */
/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**Check number of words contained in given string, if total number of words is greater then 5,
 * then return uppercase string, otherwise, return lower case string
 * @param {string} sentence
 * @returns {string}
 */

const formatStringByWordsLength = function (sentence) {
  const totalWords = getTotalWordsFromString(sentence);
  const exceeds = isGreaterThan(totalWords, 5);

  return exceeds ? sentence.toUpperCase() : sentence.toLowerCase();
};

export default formatStringByWordsLength;
