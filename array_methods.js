// Array methods

 

const nums = [1, 2, 3];

 

// concat

const nums2 = [4, 5, 6]

console.log(nums.concat(nums2));

console.log(nums.concat(nums2).concat(nums2)); // chaining

 

// slice

console.log(nums.slice(1, 3));

console.log(nums.slice(-1));

 

// pop - push

const num = nums.pop();

console.log(nums, num);

nums.push(num);

console.log(nums);

 

//shift - unshift

const number = nums.shift();

console.log(nums, number);

nums.unshift(number);

console.log(nums);

 

 

// splice - be careful with this method, it modifies the original array

const deleted = nums.splice(1);

console.log(deleted);

console.log(nums);

 

// higher order

 

 

// find

 

 

// some, every

 

 

// forEach

 

// map

 

 

// filter

 

 

// sort