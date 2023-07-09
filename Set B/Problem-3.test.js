const findDuplicate = require("./Problem-3");

describe(("Find the single value that has been duplicated in the array"), () => {

    test("[1, 2, 3, 4, 4, 5, 6] => 4", () => expect(findDuplicate([1, 2, 3, 4, 4, 5, 6])).toBe(4)); // Case with sorted array
    test("[3, 4, 5, 6, 1, 1, 2] => 1", () => expect(findDuplicate([3, 4, 5, 6, 1, 1, 2])).toBe(1)); // Case out of order
    test("[] => 0", () => expect(findDuplicate([])).toBe(0));                                        // Empty array (0 implies no duplicate because array can only contain numbers above 1)
    test("[3, 4, 4, 5, 6, 1, 2] => 4", () => expect(findDuplicate([3, 4, 4, 5, 6, 1, 2])).toBe(4));   // Should return 4
})