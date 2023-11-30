import isGreaterThan from "./isGreaterThan.js";

describe("Given function isGreaterThan", () => {
  describe("When function is called with a number greater than the threshold", () => {
    test("Then it should return true", () => {
      // Arrange
      const value = 10;
      const threshold = 5;

      // Act
      const result = isGreaterThan(value, threshold);

      // Assert
      expect(result).toBe(true);
    });
  });
  describe("When function is called with a number less than the threshold", () => {
    test("Then it should return false", () => {
      // Arrange
      const value = 5;
      const threshold = 10;

      // Act
      const result = isGreaterThan(value, threshold);

      // Assert
      expect(result).toBe(false);
    });
  });
});
