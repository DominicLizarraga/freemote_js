// Arrow function

 

function addTwo(num) {

  return num + 2; 

};

 

// function expression

 

const addTwo =  function (num) {

      return num + 2; 

};

 

 

// arrow function 1st way of writing

const addTwo = (num) => {

      return num + 2; 

};

 

// arrow function 2nd way of writing, everything btw the rocket and semicolon will be returned

 

const addTwo = (num) =>  num + 2; 

 

 

// arrow function 3rd way of writing

 

const addTwo = (num) =>  { return num + 2};

 

 

// arrow function 4th way of writing

 

const addBothNumbers = (first, second) => {

    return first + second; 

};

 

// arrow function 5th way of writing

 

const doubleUntilOver1000 = (num) => {

   

    while (num < 1000){

        console.log(num);

        num *= 2;

    };

    return num;

};

 

console.log(doubleUntilOver1000(50));