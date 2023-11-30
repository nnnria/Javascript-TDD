import getTotalWordsFromString from "./getTotalWordsFromString.js";

describe("Given function getTotalWordsFromString", () => {
  describe("When function is called with a string", () => {
    test("Then it should return the total number of words contained in the string", () => {
      // Arrange
      const sentence = "Hello world";

      // Act
      const result = getTotalWordsFromString(sentence);

      // Assert
      expect(result).toBe(2);
    });
  });
});
