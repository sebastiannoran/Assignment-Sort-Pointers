const missingNumber = require("./findMissNum.js")

describe("missingNumber(nums) returns the value missing in array of range array length", () => {
    test("missingNumber([3,0,1]) should return 2", () => {
        expect(missingNumber([3, 0, 1])).toEqual(2);
    })

    test("missingNumber([0, 2, 3, 4]) should return 1", () => {
        expect(missingNumber([0, 2, 3, 4])).toEqual(1);
    });
});
 
