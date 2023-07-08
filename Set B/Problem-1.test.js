const removeDuplicates = require("./Problem-1");

// Expectations: 
// - Array is sorted
// - Array does not contain negative numbers or 0

describe(("Remove duplicates from sorted array and return the new length of the array"), () => {

    test("[2, 3, 3, 6] => 4", () => expect(removeDuplicates([2, 3, 3, 6])).toBe(3)); // Test case with one duplicate
    test("[2, 3, 6] => 3", () => expect(removeDuplicates([2, 3, 6])).toBe(3));       // Case where array contains no duplicates
    test("[] => 0", () => expect(removeDuplicates([])).toBe(0));              // Case where array is empty
    test("[1, 1, 2, 3, 2, 6] => 3", () => expect(removeDuplicates([1, 1, 2, 2, 3, 6])).toBe(4));    // Case with multiple duplicates
})