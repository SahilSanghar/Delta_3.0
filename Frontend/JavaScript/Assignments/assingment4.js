//Quest 1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length; i++) {
// if (arr[i] == num) {
//     arr.splice(i, 1);
// }
// }

// console.log(arr);

//ques 2

// let num = 287152;
// let count = 0;

// let copy = num;

// while (copy > 0) {
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

//ques 3

// let num = 287152;
// let sum = 0;

// let copy = num;

// while ( copy > 0) {
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }

// console.log(sum);

//ques 4

// let  n = prompt("Enter a number");
// let factorial = 1;

// for (let i = 1; i<=n; i++) {
//     factorial *= i;
// }
// console.log(`The factorial of ${n} is ${factorial}`)

//quest 5

let arr = [2, 5, 10, 40, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i<=arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }
}

console.log(largest);