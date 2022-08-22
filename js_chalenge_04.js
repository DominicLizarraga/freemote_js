// Given 2 numbers, multiply them WITHOUT THE * OPERATOR!

// ex multiplyNumbers(2, 5) returns 10
var multiplyNumbers = function(num1, num2) {
    // both argunments come as number
    var sum = 0;
    var i = 0
    for(num = num1; i < num2; i++) {
        sum += num
        
    }
    return sum
}

console.log(multiplyNumbers(5, 0))
console.log(multiplyNumbers(5, 10))