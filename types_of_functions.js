// for OF loops

// Declarative loop (vs imperative loops)

 

// const names = ["Dominic", "Juan", "Enrique"]

 

// for (let name of names) {

//     console.log(name);

// }

 

// this brings more readability however we dont have acces for index, you cannot replace either

 

 

// const firstName = "Dominic";

 

// for (let char of firstName) {

//     console.log(char);

//     if (char == "i") {

//         console.log("yes");

//     }

// }

 

// for IN loop

 

const user = {

    name: "dominic",

    age: 27

}

 

for (let key in user) {

    // console.log(user);

    // console.log(user[key]);

    console.log(user.name);

   

}