//Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

//There is only one repeated number in nums, return this repeated number.

//You must solve the problem without modifying the array nums and uses only constant extra space.
// we could use slow and fast pointers, right? check if fast === slow
// no we can't, different data strucure (linked list vs array)
// use cylic sort
function duplicateNum(nums) {
    const n = nums.length;
    for (let currIndex = 0; currIndex < n; currIndex++) {   
        const correctIndex = nums[currIndex] - 1;
        if (nums[currIndex] !== nums[correctIndex]) {
            [nums[currIndex], nums[correctIndex]] = [nums[correctIndex], nums[currIndex]];
            currIndex--;
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return nums[i];
        }
    }
    return -1;
}

module.exports = duplicateNum;