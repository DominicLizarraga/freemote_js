// for loops

// declaring variable i and initilize to 0

// loop is gonna run until this condition is false, (break condition)

// increment iindex (i) value to 1 each iteration

// for (let i = 0; i < 10; i++) {

//     console.log(i);// it will sun 10 times

// }

 

 

const firstName = "Dominic";

// console.log(firstName.length)

 

// for (let w = 0; w <= firstName.length; w++){

//     // every variable created within this block can be used only in this scope, not outside

//     let char = firstName[w];

//     console.log(char);

// }

 

// count all i in the string

 

let iCount = []; // create a variable before the for loop and the change it inside

 

for (let i = 0; i <= firstName.length; i++) {

    if (firstName[i] == "i" || firstName[i] == "c") {

        iCount++;

        // console.log(newArray);

   

    }

 

}

// console.log(iCount);

 

// forloops fo arrays

const nums = [100, 200, 400]

// console.log(nums.length);

const double = [];

 

for (let i = 0; i <= nums.length - 1; i++) {

    let num = nums[i];

    double.push(nums[i] * 2);

    console.log(double);

}