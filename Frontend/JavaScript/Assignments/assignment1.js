//Ques 1
let Num = 25;

if (Num%10 === 0) {
    console.log("Good");
}
else {
    console.log("Bad")
}

//Ques 2
// let userName = prompt("Enter you username:");
// let age = prompt("Enter your age:");
// alert((`${userName} is ${age} years old`));

//Ques 3
let Quater = 2;
switch(Quater) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a Quater!");
}

//Quest 4
let str = "Tristan";
if (str[0] == 'A' && str.length>5) {
    console.log("A golden string");
}
else if (str[0] == 'a' && str.length>5) {
    console.log("A golden string");
}
else {
    console.log("Not a golden string");
}

//Ques 5
let a = 500;
let b = 100;
let c = 200;

if (a>b) {
    if (a>c) {
        console.log(a +" "+"is the largest");
    } else {
        console.log(c +" "+"is the largest");
    }
}else {
    if (b>a){
       if (b>c) {
        console.log(b +" "+ "is the largest");
    } else {
        console.log(c +" "+"is the largest");
    }
}
}

//Ques 6
let num1 = 36;
let num2 = 47856;

if ((num1%10) === (num2%10)) {
    console.log("numbers have the same last digit which is", num1%10)
    ;
}
else {
    console.log("numbers don't have the same last digit");
}