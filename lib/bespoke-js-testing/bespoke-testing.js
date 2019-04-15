var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed: " + assertionToCheck + " is truthy")
    };
  },
  isEqual: function(valueToCheck, expectedValue) {
    if (valueToCheck !== expectedValue) {
      throw new Error("Assertion failed: " + valueToCheck + " is not equal to " + expectedValue);
    } else {
      console.log("Assertion passed: " + valueToCheck + " is equal to " + expectedValue)
    }
  },
  isNotEqual: function(valueToCheck, expectedValue) {
    if (valueToCheck === expectedValue) {
      throw new Error("Assertion failed: " + valueToCheck + " is equal to " + expectedValue);
    } else {
      console.log("Assertion passed: " + valueToCheck + " is not equal to " + expectedValue)
    };
  }
};
