import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty.js";

describe("Given function isAdditionGreaterThanFifty", () => {
  describe("When function is called with two numbers", () => {
    test("Then it should return true if the sum is greater than 50", () => {
      // Arrange
      const summand1 = 25;
      const summand2 = 26;

      // Act
      const result = isAdditionGreaterThanFifty(summand1, summand2);

      // Assert
      expect(result).toBe(true);
    });
  });
  describe("When function is called with two numbers", () => {
    test("Then it should return false if the sum is less than 50", () => {
      // Arrange
      const summand1 = 10;
      const summand2 = 20;

      // Act
      const result = isAdditionGreaterThanFifty(summand1, summand2);

      // Assert
      expect(result).toBe(false);
    });
  });
  describe("When function is called with two numbers", () => {
    test("Then it should return true if the sum is equal to 50", () => {
      // Arrange
      const summand1 = 25;
      const summand2 = 25;

      // Act
      const result = isAdditionGreaterThanFifty(summand1, summand2);

      // Assert
      expect(result).toBe(true);
    });
  });
});
