/*

  JS Practice 5

 

    This will be the hardest practice yet, so get ready!

 

    We'll practice using common methods, then creating our own functions

 

    To test a given function or method,

    you can put it inside a console log, like so.

        >> console.log(addTwo(2));

        >> 4

 

    or like so with your "expected" value of 4

        >> console.log(addTwo(2) === 4)

        >> true

    this also known as a test :)

*/

   

    

 

/*

    ☑️ Cool, let's create our own functions, first create a function definition that...

        >> 1. takes a number, "num" as an argument

        >> 2. divides num by 2

        >> 3. (don't forget to return!)

    ☑️ then, add some code to your function that rounds the number DOWN

    ☑️ finally, call your function with the values: 10, 25, 1235

        >> these should return: "5", "12", "617"

*/

    function divideTwo(num) {

        return Math.floor(num / 2); 

    };

   console.log(divideTwo(10));

    console.log(divideTwo(25));

    console.log(divideTwo(1235));

 

/*

    ☑️ now, create a function expression that

        >> 1. takes a string as an argument

        >> 2. takes the first character "upper cases" it, and returns it

        >> 3. HINT: use direct indexing to get a single character from a string

    ☑️ call your function with the values: "hello", "world", "i love javascript"

        >> these should return "H", "W", "I"

    ☑️ BONUS: change your fn to return the original string capitalized

        >> these should return "Hello", "World", "I love javascript"

*/

 

    const charFunct = function(string) {

        const lastPart = string.slice(1)

        return string[0].toUpperCase().concat(lastPart);

    }

 

    console.log(charFunct("hello"));

    console.log(charFunct("world"));

    console.log(charFunct("i love javascript"));

 

/*

    ☑️ Now, let's get some practice with the string methods

    ☑️ given the string "i love javascript"...

        >> get the "indexOf" the "j" character (should return 7)

        >> get the "indexOf" the "z" character (should return -1)

 

        >> get a "slice" of just the word "javascript"

        >> get a "slice" of just the word "love"

 

        >> "replace" the word "javascript" with "HTML"

 

        >> "split" the words apart into an array (should return ["i", "love", "javascript"])

*/

    string = "i love javascript"

    console.log(string.indexOf("j"));

   

    string2 = "i love javascript"

    console.log(string2.indexOf("z"));

 

    string3 = "i love javascript"

    console.log(string3.slice(7));

 

    string4 = "i love javascript"

    console.log(string4.slice(2, 7));

   

    string5 = "i love javascript"

    console.log(string5.replace("javascript", "HTML"));

   

    string6 = "i love javascript"

    console.log(string6.split(" "));

 

/*

    ☑️ let's get some practice with the number methods

    ☑️ given the number 1000

        >> Convert it to a string with a "fixed" 2 decimal places

        >> add a dollar sign to the front of this string

        >> Use Math.max to compare your age with my age (28)

*/

    const number = 1000;

    console.log(number.toFixed(2));

    console.log(`$ ${number.toFixed(2)}`);

    console.log(Math.max(number, 28));

/*

    ☑️ let's get some practice with the array methods

    ☑️ given the array [ 1, 2, 3, 4 ]

        >> Let's "slice" it to just get the last 2 numbers

            (remember, it does not modify the array, but makes a copy)

 

        >> Now, let's "push" numbers 5 and 6 into our array

            ( the Array should now be [1, 2, 3, 4, 5, 6] )

 

        >> Let's "SPLICE" it to now remove the 4 and 5

            (remember, this DOES modify the array "in place")

 

*/

    const myArray = [ 1, 2, 3, 4 ]

    console.log(myArray.slice(-2));

    myArray.push(5, 6);

    console.log(myArray);

    myArray.splice(4, 5);

    console.log(myArray);

 

 

 

/*

    CHAINING

 

    A common pattern is to chain multiple methods together

    They get "evaluated" from left to right, so...

 

    var name = "Igor Z";

 

    name.toUpperCase().split(' ');

        >> would work!

        >> toUpperCase goes first, so we get: "IGOR Z".split(' '), and finally ['IGOR', 'Z']

        >> in other words, we use 2 string methods in a row

 

    name.split(' ').toUpperCase();

        >> would NOT work

        >> split goes first, so we get ["Igor", "Z"].toUpperCase(), which causes an error

        >> we cannot use .toUpperCase, a string method, on an array

 

    ☑️ a common pattern is chaining "split" and "join" together

        this allows us to use array methods on strings, and then convert them back

 

        write the following out to see for yourself

        >> create a string, var alphabet = "abc"

        >> ".split" this string with the "" (empty space) char as an argument

        >> attach the ".reverse()" method to the end

        >> now ".join" this array with the "" (empty space) char as an argument

 

        cool, right?

*/

    var alphabet = "abc";

    console.log(alphabet.split("").reverse().join(""));

/*

    ☑️ ok, now it's your turn (for real this time)

        Chain these steps into a single line! (Don't use intermediary variables)

 

    ☑️ create a number, var myNumber = 100...

        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")

        >> Then let's "split" it at "." to get dollars and cents

        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")

*/

    var myNumber = 100;

    console.log(myNumber.toFixed(2).split(".")[1]);

/*

    ☑️ one more, create a string, var coachName = "jan frey"...

        >> Let's split the words apart

        >> Then JUST get the last name initial (hint: direct indexing 2x)

        >> Convert the "f" to upper case

        >> Concat it, to create a string that says "F is the last initial"

        >> And finally, wrap the whole thing in a console.log!

*/

 

    var coachName = "jan frey"

    var parts = coachName.split(" ")

    var lastName = parts[1][0]

    var capitalLastName = lastName.toUpperCase();

    var fullName = parts[0] + " " + capitalLastName + (parts[1].slice(1))

console.log(fullName);

   