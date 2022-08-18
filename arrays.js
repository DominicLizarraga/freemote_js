// arrays

// compound data types

console.log("-----------print all elements------")

 

const nums = [1, 2, 3];

console.log(nums);

 

console.log("-----------print obect type------")

 

console.log(typeof(nums));

 

console.log("-----------print array lenght------")

 

console.log(nums.length);

 

console.log("-----------print second element (direct indexing)------")

 

console.log(nums[1]);

 

console.log("-----------add elements (with push method)------")

nums.push(4);

console.log(nums);

 

console.log("-----------add elements (short cur)------")

 

nums[4] = 5;

console.log(nums);

 

console.log("-----------remove last element------")

 

nums.pop();

console.log(nums);

 

console.log("-----------store last element------")

 

 

const last = nums.pop();

 

console.log(last);

 

console.log(nums);

 

console.log("-----------edit first element------")

 

 

nums[0] = 0;

 

console.log(nums);