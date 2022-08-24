var sum = 0;
var sumMultiples = function(n) {
    //create empty accumulator
    //iterate down from n to 0 with while loop
    while(n--) {
        // check if n is multiple of either 3 or 5
        // console.log(n)
        if(n % 3 === 0 || n % 5 === 0) {
           
            sum += n
        }
        
    }
    return sum
  
}

console.log(sumMultiples(200))