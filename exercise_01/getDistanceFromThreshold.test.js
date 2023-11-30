import getDistanceFromThreshold from "./getDistanceFromThreshold.js";
/**
 * The test descriptions are made using Given/When/Then
    * Given is for the SUT (System Under Test), what they are going to test (a function, a method, a component...)
    * When is to say what the function receives
    * Then is to say what it should return
describe() function can be nested

Then, within each test, we organize them using triple A
    * Arrange to define what data is sent and what is expected
    * Act to invoke the function
    * Assert for the expect
 */

describe("Given function getDistanceFromThreshold", () => {
  describe("When function is called with value less than threshold", () => {
    test("Then a negative should be returned", () => {
      // Arrange
      const value = 4;
      const threshold = 20;

      // Act
      const result = getDistanceFromThreshold(value, threshold);

      // Assert
      expect(result).toBe(-16);
    });
  });

  describe("When function is called with value greater than threshold", () => {
    test("Then a positive should be returned", () => {
      // Arrange
      const value = 40;
      const threshold = 20;

      // Act
      const result = getDistanceFromThreshold(value, threshold);

      // Assert
      expect(result).toBe(20);
    });
  });
});
