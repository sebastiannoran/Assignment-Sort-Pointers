// Function will find the duplicate in the array
function findDuplicate(nums){
    // Print the initial array for basic test case
    // Beginning of Cyclic sort, getting indexes based on values
  let currentIndex = 0;

  while (currentIndex < nums.length) {
    const value = nums[currentIndex];
    if (value !== currentIndex + 1) {
      if (value === nums[value - 1]) {
        // Found a duplicate
        return value;
      }
      // Swap the numbers
      [nums[currentIndex], nums[value - 1]] = [nums[value - 1], nums[currentIndex]];
      } else {
        currentIndex++;
      }
    }

      // If nothing is found, return 0
    return 0;
}

    console.log(findDuplicate([3, 4, 5, 6, 1, 1, 2]));
    module.exports = findDuplicate;