// Strings Methods

 

const animal = "dogs are GReat";

 

// length (this is an attribute not a function)

console.log(animal.length);

 

// indexOf (find a character or substring within a string)

console.log(animal.indexOf("s"))

 

// slice

console.log(animal.slice(1));

console.log(animal.slice(0, 4));

console.log(animal.slice(0, -6));

 

// toUpper / LowerCase

console.log(animal.toUpperCase());

console.log(animal.toLowerCase());

 

// concat

console.log(`${animal.toLowerCase()} and kind`);

console.log(animal.concat(" and pretty"));

console.log(animal + " and heavy");

 

// replace

 

console.log(animal.replace("dog", "foxes")); // can be use with regex

 

 

// split | converts String into array

 

console.log(animal.split(""));

console.log(animal.split(" "));