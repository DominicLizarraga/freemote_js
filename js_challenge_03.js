var sumOfPositive = function(nums) {
  // initialize a variable at zero
  var sum = 0;
  // iterate over each element to see if is positive
  // for(let i =0; i < nums.length; i++)
    for(let num of nums) {
      // if positive add to sum
        // console.log(num)
        if(num >= 0) {

            sum = sum + num
          
        }
        
    }
  // return the sum variable
    return sum
}

const nums = [1, -2, 3, 4, 70];

console.log(sumOfPositive(nums))

// another solution with ternay operator


// var sumOfPositive = function(nums) {
//     return nums.reduce((a, b) =>
//     (b >= 0 ? a + b : a), 0);
//     }