/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
/**
 * Checks if a collection has elements (non-empty).
 * @param {Array} collection - The input array collection.
 * @returns {boolean} - Indicates if the collection has elements (true) or is empty (false).
 */
function checkCollectionHasElements(collection) {
  return Array.isArray(collection) && collection.length > 0;
}
export default checkCollectionHasElements;
