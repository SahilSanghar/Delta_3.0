//Ques 1

// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num*num);
// console.log(square);

// const sum = nums.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length 

//Ques 2

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((arr) => arr+5);


//Ques 3

// let strings = ["john","roman","seth","dean","orton"];

// const newStr = strings.map((string) => string.toUpperCase());

//Ques 4

// const doubleAndReturn = (arr, ...args) => [
//     ...arr,
//     ...args.map((v)=> v*2),
// ]

//Ques 5

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

mergeObjects({a:1,b:2},{c:3,c:4})