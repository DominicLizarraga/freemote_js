var unbalancedArray = function(nums) {
    var sum = 0;
    
    for (let num of nums) {
        sum += num
    }
    return sum
}

const nums = [1, -4, 5, 4, -1];

console.log(unbalancedArray(nums));