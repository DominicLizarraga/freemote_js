// higher order array methods

const nums = [1, 2, 3]

 

// find

 

const found = nums.find((num) => {

    if (num > 2) {

        // console.log(num)

        return true

    }

});

 

console.log(found)

 

// some, every

const ages = [12, 19, 21, 24, 56, 18]

 

const hasSome = ages.some((age) => {

    if (age > 18){

        console.log("can vote")

    } else {

        console.log("cannot vote")

    }

})

 

hasSome;// this prints false due to some are below 18

 

const heigths = [180, 198, 203, 189]

 

const areAllTaller = heigths.every((heigth) => {

    if (heigth > 170) {

        return "all my family is taller"

    } 

});

 

console.log(areAllTaller); // return true

 

 

// forEach - needs no variable to be stored

 

const heigths2 = [180, 198, 203, 189, 190]

 

var averageHeigth = 150;

 

heigths2.forEach((heigth, index) => {

  

    if(heigth > averageHeigth) {

        averageHeigth = heigth

    }

   

});

 

console.log(averageHeigth);

 

 

// map - it MUST always return something if not it will be as undefinedm you can modify elements

 

const newAges = [23, 54, 22, 15, 54]

 

const newArray = newAges.map((newAge) => {

   if(newAge > 40){

       return "boomers"

   } else {

       return "zoomers"

   }

});

 

console.log(newArray);

 

 

// filter

 

const newAges2 = [23, 54, 22, 15, 54]

 

const zoomers = newAges2.filter((age2) => {

    if(age2 < 40){

        return "zoomer"   

    };

    

});

 

const boomers = newAges2.filter((age2) => {

    if(age2 < 40){

        return "boomers"   

    };

    

});

 

console.log(zoomers, boomers);

 

// sort

 

var names = ["aaron", "yulian", "enrique"]

 

names.sort();

console.log(names);

 

 

 

// reduce

 

const weights = [ 100, 120, 140, 160, 80];

 

const result = weights.reduce((sum, weight) => {

    console.log(sum)

    return sum + weight;

})

 

console.log(result);