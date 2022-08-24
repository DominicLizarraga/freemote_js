var emptyArray = [];

var countOdd = function(num) {
    // create empty array
    // check if num is odd
    while (num--) {
        if(num % 2) {
            // console.log(num)
            emptyArray.push(num)
        } 
        
    }
    
    return emptyArray.length
}

console.log(countOdd(1))
