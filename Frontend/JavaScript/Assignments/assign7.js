//Question 1 

//let arr = [1,2,7,8,10,20];


// const arrayAverage = (arr) => {
//     let total=0; {
//         for(let numbers of arr) {
//             total+=arr.length;
//         }
//     } return total/arr.length;
// }


// console.log(arrayAverage(arr));

//Quest 2

// const isEven = (n) => n%2==0;

//ques 3

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
}; 
setTimeout(object.logMessage,1000);