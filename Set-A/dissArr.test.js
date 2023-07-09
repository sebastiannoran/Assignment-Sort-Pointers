const dissArr = require("./dissArr.js");

describe("dissArr(nums) returns the array of missing numbers in the range [1, n]", () => {
    test("dissArr([4, 3, 2, 7, 8, 2, 3, 1]) should return [5, 6]", () => {
    expect(dissArr([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  test("dissArr([1, 1]) should return [2]", () => {
    expect(dissArr([1, 1])).toEqual([2]);
  });
  
});