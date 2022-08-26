var countVowels = function(s) {
  
  // your code here
  if (s.match(/[aeiou]/ig)) {
    return s.match(/[aeiou]/ig).length;
  } else { 
    return 0;
  }

}