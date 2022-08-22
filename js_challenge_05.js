
// Given a string, duplicate in n times and return a single string

// Ex: repeatString("B", 5) returns "BBBBB"

// Ex: repeatString("Abc", 3) returns "AbcAbcAbc"

var repeatString = function(s, n) {

  // your code here
  // create a var to store
  var string = "";
  // loop n times 
  while(n--) { // 6, 5, 4, 3, 2, 1, 0
      // add the string to the storage var
      string += s

  }
  // return string
  return string
};

console.log(repeatString("Abc", 6))