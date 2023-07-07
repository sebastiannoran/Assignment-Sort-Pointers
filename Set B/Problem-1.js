//Input: nums = [1,1,1,2,2,3,3,4]
//Input Output: nums.length = 4, with nums being [1, 2, 3, 4]

// Function will remove duplicates in the array
function removeDuplicates(nums){
// Print the initial array for basic test case
console.log(`The initial array is ${nums}`);
// Beginning of Cyclic sort, getting indexes based on values
let currentIndex = 0;
  // Iterate throughout our entire nums array
  for(currentIndex; currentIndex < nums.length; currentIndex++) {
    // Get the current value
    const value = nums[currentIndex];
    // Set the correct index for the value
    const correctIndex = value - 1;
    // If the number at the current index already exists at its intended index, remove it from our nums array
    if(nums[currentIndex] === nums[correctIndex]) {
        nums.splice(currentIndex, 1);
    }
  }
  // Resulting array
  console.log(`The resulting array is ${nums}`);
  // Return the new length
  return nums.length;
}

let value = removeDuplicates([1,1,1,2,2,3,3,4]);
console.log(value);