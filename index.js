function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
     const complement = target - array[i];
     for (let j = i + 1; j < array.length; j++) {
       if (array[j] === complement) return true;
     }
    }
   return false;
}


/* 
  Write the Big O time complexity of your function here
  O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  the above function(hasTargetSum) takes in two arguments ie an array of numbers and a target
  it iterates throught the array starting from the inial number and checks the targrt to find the complimentary number
  it the iterates throught the array to find if the complimentary number is in the array
  if so it returns true
  if the iterator reaches the end of the array without finding such number
  it returns false
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

  console.log("");


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([18, 22, 15, 16], 29));

  console.log("");

}

module.exports = hasTargetSum;
