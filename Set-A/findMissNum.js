function missingNumber (nums) {
    for (let currIndex = 0; currIndex < nums.length; currIndex++) {
        const correctIndex = nums[currIndex] - 1;
        if (currIndex !== correctIndex) {
            return nums[correctIndex];
        }
    }
}

let nums = [3,0,1];

console.log(missingNumber(nums));

module.exports = missingNumber;