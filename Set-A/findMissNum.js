function missingNumber (nums) {
    let n = nums.length // record the range of the array
    for (let currIndex = 0; currIndex < n; currIndex++) {
        const correctIndex = nums[currIndex]
        if (nums[currIndex] !== nums[correctIndex]) {
            [nums[currIndex], nums[correctIndex]] = [nums[correctIndex], nums[currIndex]];
        }
    }
    // with array sorted using cyclic sort, find the missing num using additional for loop
    // still keep 0(n) time
    for (let i = 0; i <= n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
}

let nums = [3,0,1];

const missingNum = missingNumber(nums);

console.log(missingNum);


module.exports = missingNumber;