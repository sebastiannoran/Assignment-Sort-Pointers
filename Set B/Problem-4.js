// Function will find all duplicates in the array
function findAllDuplicates(nums){
    // Print the initial array for basic test case
    // Beginning of Cyclic sort, getting indexes based on values
    let currentIndex = 0;
    let duplicates = [];
      // Iterate throughout our entire nums array, with a while loop instead
    while(currentIndex < nums.length) {
        // Get the current value
      const value = nums[currentIndex];
        // Set the correct index for the value
      const correctIndex = value - 1;
        // Swap the value into the correct index
  
      if (value !== currentIndex + 1) {
        if (value === nums[correctIndex]) {
            // Found a duplicate, if it doesn't already exist, push it to the duplicate array
          if (!duplicates.includes(value)) {
            duplicates.push(value);
          }
          currentIndex++;
        } else {
            // Swap the numbers, the only case where our index does not increase, because we need to check our current value again
          const valueAtCorrectIndex = nums[correctIndex];
          nums[currentIndex] = valueAtCorrectIndex;
          nums[correctIndex] = value; 
        } 
      } else {
        currentIndex++;
      }
    }
      // Return the duplicate array
      return duplicates;
    }
    

    module.exports = findAllDuplicates;