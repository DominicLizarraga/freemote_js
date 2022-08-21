var getInitials = function(name) {
    
    // your code here
  //split the argument into different string and save each element in a variable 
  var firstPart = name.split(" ")[0][0]
  var secondPart = name.split(" ")[1][0]
  // make boy variable to up case
   var secondUp = secondPart.toUpperCase();
   var firstUp = firstPart.toUpperCase();
  // return both variable concatenated 
  return firstUp + "." + secondUp
  
}

console.log(getInitials("aaron jack"))