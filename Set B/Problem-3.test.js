const findDuplicate = require("./Problem-3");

describe("Find the single value that has been duplicated in the array", () => {

    test("[1, 2, 3, 4, 4, 5, 6] => 4", () => { expect(findDuplicate([1, 2, 3, 4, 4, 5, 6])).toBe(4)})

})