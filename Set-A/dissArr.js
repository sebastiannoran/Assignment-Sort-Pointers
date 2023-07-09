function dissArr(nums) {
    let newArr = [];
    let n = nums.length; // save the length of the array size

    for (let currIndex = 0; currIndex < n; currIndex++ ) { // use cyclic sort logic
        const correctIndex = nums[currIndex] - 1;
        if (nums[currIndex] !== nums[correctIndex]) { // decrement if & only if current index does not hold correct index
            [nums[currIndex], nums[correctIndex]] = [nums[correctIndex], nums[currIndex]];
            currIndex--;
        }
    }
    for (let i = 0; i < n; i++) { // push missing values into new array
        if (nums[i] !== i + 1) {
            newArr.push(i + 1); //if index value is 4, then the output in the newArr is 5
        }
    }
    return newArr;
}

module.exports = dissArr;
