/*

    ☑️ Start by declaring an "Array literal" --

       that is, writing out an array from scratch! --

       and call the variable "nums"

    ☑️ Fill it with the numbers 1, 2, and 3

    ☑️ Now print the first number, and the last number from 'nums' to the console

    ☑️ Finally, change the "zero index" number to be 4

    ☑️ And print out the entire "nums array"

*/

const array = [1, 2, 3];

console.log(array[0]);

console.log(array[array.length - 1]);

array[0] = 4   

console.log(array);

/*

☑️ Let's add 5 and 6 to the end of the nums array (HINT: use a "method")

    Print nums to make sure everything looks right (should be [4, 2, 3, 5, 6])

☑️ Now let's set the "last index" number to be 10

☑️ And let's "pop" off the last number and store it in a variable "lastNum"

☑️ Then print "lastNum" to the console!

*/

array.push(5);

array.push(6);

console.log(array);

console.log(array.length);

array[5] = 10;

console.log(array);

const lastNum = array.pop();

console.log(lastNum);

/*

☑️ Let's declare an "Object literal" called "product" with properties for:

    > name, set to "shiny shoes"

    > brand, set to "gucci"

    > price, set to 100

    > color, set to "black"

    > soldOut, set to false



☑️ Let's print the name, brand, and price to the console in a single string

☑️ Let's add a new property / key called "sale" and set it to true

☑️ Let's add a new property called "tags" and set it to an array literal with

   values "men", and "luxury"

☑️ Let's change the soldOut property to true (don't change the original object)

☑️ Print out the entire object and make sure everything looks correct

*/



const product = {

    name: "shiny shoes",

    brand: "gucci",

    price: 100,

    color: "black",

    soldOut: false

}

console.log(`${product.name} ${product.brand} ${product.price}`);



product.sale = true



product.tags = ["men", "luxury"]



product.soldOut = true



console.log(product);