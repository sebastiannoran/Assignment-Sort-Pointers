//Input: nums = [1,2,3,4,4,5,6]
//Input Output: duplicate = 4

// Function will find the duplicate in the array
function findDuplicate(nums){
    // Print the initial array for basic test case
    console.log(`The initial array is ${nums}`);
    // Beginning of Cyclic sort, getting indexes based on values
    let currentIndex = 0;
    let duplicate = 0;
      // Iterate throughout our entire nums array
      for(currentIndex; currentIndex < nums.length; currentIndex++) {
        // Get the current value
        const value = nums[currentIndex];
        // Set the correct index for the value
        const correctIndex = value - 1;
        // If the number at the current index already exists at its intended index, but the current index is NOT the correct index,
        // mark it as the duplicate. This means there is an already existing version of the duplicate in the correct place
        if(currentIndex != correctIndex && nums[currentIndex] == nums[correctIndex]) {
            duplicate = nums[currentIndex];
            break;
        }
      }
      // Return the duplicate
      return duplicate;
    }
    
    let value = findDuplicate([1,2,3,4,4,5,6]);
    console.log(value);