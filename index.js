function hasTargetSum(array, target) {
  // Write your algorithm here
  let iteratedNumbers = new Set();
  for (let num of array) {
    let difference = target - num;
    if (iteratedNumbers.has(difference)) {
      return true;
    }
    iteratedNumbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity is O(n) since we iterate through the array once.
  Scape complexity is O(n) since we store up n elements in a set.
*/

/* 
  Add your pseudocode here
  1.Make an empty set to keep track of the numbers already seen
  2.Iterate through the array for each number
  3.For each number, it calculates the difference between the target and the current number 
  .Cheek if the difference is in the set.{
  - If the difference is there, return"true"
  - If the difference isn't there, add the current number to the set
    }
  5. If the iteration is over without finding any, return "false"
*/

/*
  Add written explanation of your solution here
  1.Implement the use of set to keep track of the numbers already seen in the array during iteration
  2.For each number, we check if the difference between the number and the target is in the set.If it exists in the set ,we have found a pair adding up to the target
  3.If the loop finishes without finding any pair, return "false"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
