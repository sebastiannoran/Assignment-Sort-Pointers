// Function will find all duplicates in the array
function findAllDuplicates(nums){
    // Print the initial array for basic test case
    // Beginning of Cyclic sort, getting indexes based on values
    let currentIndex = 0;
    let duplicates = [];
      // Iterate throughout our entire nums array
      for(currentIndex; currentIndex < nums.length; currentIndex++) {
        // Get the current value
        const value = nums[currentIndex];
        // Set the correct index for the value
        const correctIndex = value - 1;
        // Swap the value into the correct index
        if(currentIndex != correctIndex) {
            const valueAtCorrectIndex = nums[correctIndex];
            nums[currentIndex] = valueAtCorrectIndex;
            nums[correctIndex] = value; 
        }
      }

      // For every value in the newly sorted array, push any number that does not match the correct index
      for(let i = 0; i < nums.length; i++) {
        if(i + 1 != nums[i]){
            duplicates.push(nums[i]);
        }
      }
      // Return the duplicate
      return duplicates;
    }
    

    module.exports = findAllDuplicates;