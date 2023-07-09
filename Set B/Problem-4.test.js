const findAllDuplicates = require("./Problem-4");

describe(("Find all duplictaes in an array"), () => {

    test("[1, 2, 3, 4, 4, 5, 6] => [4]", () => expect(findAllDuplicates([1, 2, 3, 4, 4, 5, 6])).toEqual([4]));
    test("[1, 1, 2, 3, 4, 4, 5, 5, 6] => [1, 4, 5]", () => expect(findAllDuplicates([1, 1, 2, 3, 4, 4, 5, 5, 6])).toEqual([1, 4, 5]));
    test("[] => []", () => expect(findAllDuplicates([])).toEqual([]));
    test("[1, 2, 3, 4, 5] => []", () => expect(findAllDuplicates([1, 2, 3, 4, 5])).toEqual([]));

})