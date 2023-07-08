// Function will remove duplicates in the array
function removeDuplicates(nums){
// Print the initial array for basic test case
// Beginning of Cyclic sort, getting indexes based on values
let currentIndex = 0;
  // Iterate throughout our entire nums array
  for(currentIndex; currentIndex < nums.length; currentIndex++) {
    // Get the current value
    const value = nums[currentIndex];
    // Set the correct index for the value
    const correctIndex = value - 1;
    // If the number at the current index already exists at its intended index, remove it from our nums array
    
    if(nums[currentIndex] === nums[correctIndex] && nums[correctIndex]  != undefined && currentIndex != correctIndex) {
        nums.splice(currentIndex, 1);
    }
  }
  // Resulting array
  // Return the new length
  
  return nums.length;
}

module.exports = removeDuplicates;