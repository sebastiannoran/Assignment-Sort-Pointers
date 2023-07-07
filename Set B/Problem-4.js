//Input: nums = [3,1,5,2,4,3,3,4,2]
//Input Output: duplicate Array = [3,4,5]

// Function will find all duplicates in the array
function findAllDuplicates(nums){
    // Print the initial array for basic test case
    console.log(`The initial array is ${nums}`);
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

      console.log(`The sorted array is ${nums}`);
      // For every value in the newly sorted array, push any number that does not match the correct index
      for(let i = 0; i < nums.length; i++) {
        if(i + 1 != nums[i]){
            duplicates.push(nums[i]);
        }
      }
      // Return the duplicate
      return duplicates;
    }
    
    let value = findAllDuplicates([3,1,5,2,4,3,3,4,2]);
    console.log(value);