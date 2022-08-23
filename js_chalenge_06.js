var isPalindrome = function(str) {

  // your code here
  //save normal string in a variable
  var normalStr = str
  // reverse the string and save it in another variable
  var reverseStr = str.split("").reverse().join("")
  // compare both variables
  return normalStr === reverseStr
  
  
};

console.log(isPalindrome("racecar"));