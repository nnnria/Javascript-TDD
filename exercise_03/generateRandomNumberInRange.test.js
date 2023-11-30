import generateRandomNumberInRange from "./generateRandomNumberInRange.js";

describe("Given function generateRandomNumberInRange", () => {
  describe("When function is called with a number ", () => {
    test("Then it should return a number within the range", () => {
      // Arrange
      const limit = 10;

      // Act
      const result = generateRandomNumberInRange(limit);

      // Assert
      expect(result).toBeLessThan(limit);
    });
  });
});
