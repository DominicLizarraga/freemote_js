// objects

 

const user = {

    name : "Dominic",

    age : 28,

    hasJob : false,

    socialMedia: {

        twitter: "dominic_liz",

        facebook: "dominic lizarraga"

    }

};

 

console.log("-----print the whole Object----")

console.log(user);

console.log("-----print name attr with dot syntax----")

console.log(user.name); // dot syntax

 

 

 

console.log("-----print name attr with string literal----")

console.log(user['name']); // string literal syntax

 

 

console.log("-----print name attr variable syntax----")

const key = 'name'

console.log(user[key]); // string literal syntax

 

 

 

console.log("-----setting properties----")

 

console.log(user.age);

user.age = 30; // re assign variable

console.log(user.age);

 

 

console.log("-----chaining properties----")

 

console.log(user.socialMedia.twitter);

 

 