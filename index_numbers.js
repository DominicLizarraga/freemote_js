const myMoney = 100;
const myFriendMoney = 200 + 20; // primitive data type JS is bilt on primitive DT; if somethign is broken you come down to primite data type

console.log(myMoney + myFriendMoney);

const totalMoney = myMoney + myFriendMoney

console.log(totalMoney + 1);

// reminder / modulo

const change = totalMoney % 100; // gives the reminder not the result

console.log(change);

const iHaveMoreMoney = myMoney > myFriendMoney;

console.log(iHaveMoreMoney); // this is false

const heHasMoreMoney = myMoney < myFriendMoney;

console.log(heHasMoreMoney); // this is true


// equivalent == or ===

const sameAmountOfMoney = myMoney === myFriendMoney;

console.log(sameAmountOfMoney)

// if statement

if (myMoney > myFriendMoney) {
    console.log('Im rich');
} else if (myMoney > 200) {
    console.log('Im doing OK');
} else {
    console.log('im poor'); // this will run if everythings failed, it's like the default option
}



