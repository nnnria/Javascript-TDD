//imports
import formatStringByWordsLength from "./formatStringByWordsLength.js";

const sentence1 = formatStringByWordsLength(
  "THIS IS A LONG, LONG, LONG SENTENCE.",
);
console.log(sentence1);

const sentence2 = formatStringByWordsLength("This is short one.");
console.log(sentence2);
