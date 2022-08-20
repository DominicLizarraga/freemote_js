detecting and converting types

 

const myNum = "123";

 

if (typeof myNum === 'number') {

    console.log('its a number');

} else if (typeof myNum === 'string') {

    console.log('its a string');

}

 

 

const myArr = [1, 2, 3];

 

console.log(Array.isArray(myArr)); // true

 

if (Array.isArray(myArr)) {

    console.log('array?'); // array?

}

 

console.log(isNaN(NaN)); // true

 

 

console.log("-----converting-----")

 

let myNum = "123";

 

if (typeof myNum !== 'number') {

    // convert to number

    myNum = Number(myNum);

    console.log(typeof myNum, myNum);

    myNum = +myNum

    console.log(typeof myNum, myNum);

}

 

 

let myNum = 123;

 

if (typeof myNum !== 'string') {

    // convert to string

    myNum = String(123);

    myNum = myNum.toString();

}

 

    console.log(typeof myNum, myNum);

 

 

 

let myNum = 123;

 

if (typeof myNum !== 'string') {

    // convert to boolean

    myNum = Boolean(123);

 

}

 

    console.log(typeof myNum, myNum);

 