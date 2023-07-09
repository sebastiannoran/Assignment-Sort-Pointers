const duplicateNum = require ("./duplicateNum");

describe("duplicateNum(nums) should read in an array and output a found duplicate value", () => {
    test("duplicateNum([1,3,4,2,2]) should return 2", () => {
        expect(duplicateNum([1,3,4,2,2])).toEqual(2);
    })

    test("duplicateNum([3,1,3,4,2] should return 3", () => {
        expect(duplicateNum([3,1,3,4,2])).toEqual(3);
    })
})