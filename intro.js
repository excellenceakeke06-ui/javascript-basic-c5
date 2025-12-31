
// variables

// variable defination

// var , let , const

var myname='EXCELLENCE';

let favouritecolour = 'black'
let ismarried = false
let lovesfood = true
const PI = 3.142
let favouriteclub;
myname = "gambo"
ismarried =true

//console.log(favouritecolour);
//console.log(myname);
//console.log(ismarried);
// data types

// 1 fundamental data types
// 2 Reference data types

//Fundamental data types

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

//STRING ; any word inside a quotation mark is a string , "a" , "baba" ETC

//NUMBER ; any numeric value is a number 1,2,3,4,-1.5,-3,1.5 ETC

//BOOLEAN ; it can have only two values true or false

//operation on datatypes

// 1. Arithmetic operation

let x = 10

let c = 4

let y = 20

//let z = x + y
//let a = y - x
//let b = x * y
//let d = Math.sqrt(c)
//console.log(z);
//console.log(a);
//console.log(b);
//console.log(d);

//operation on string

//concatination

let firstname = "Excellence"
let lastname = "Akeke"

let fullname = lastname +" "+ firstname

//console.log(fullname);

intro = "My name is "  +" "  + fullname

//console.log(intro)

let fullnamelower = fullname.toLowerCase()

//console.log(fullnamelower);

samplestring = "i love food".toUpperCase()

console.log(samplestring);

let stringlength = samplestring.length

//console.log(stringlength);

let indexofstring = samplestring.indexOf("FOOD")
//console.log(indexofstring)

//operation on boolean

let age = 16
let legalage = 18
gender  = "male"

// AND , OR , NOT operations

console.log(age>legalage);

// AND && operation both conditions must be true

//console.log(true && true);
//console.log(true && false);
//console.log(false && false);

//console.log(age>=legalage && "i can drink alcohol")

// OR || operation one condition must be true

//console.log(true || false);
//console.log(false || false);
//console.log(true || true);



console.log(age>=legalage || gender == "male"&& "i can drink alcohol");

// NOT ! operation reverses the condition

console.log(!ismarried);

// TRUTHY AND FALSY VALUES

//truthy values : strings , numbbers , objects , arrays , true boolean
//falsy values : undefined , null , false boolean , 0 number , NaN

//CONDITIONALS

//if(){

//}
//else {

//

if(true){
    console.log("i am happy".toUpperCase());
}
else {
     console.log("i am sad".toUpperCase());
}


let pass = 50
let score = 75

if(score >= pass){
    console.log("you have passed the exam".toUpperCase());
}
else {
     console.log("you have failed the exam".toUpperCase());
}

let temperature = 22
if(temperature<20){
    console.log("it is cold outside".toUpperCase());
}
else{
    console.log("it is warm outside".toUpperCase());
}

// let a =12
// let b = 15 
// console.log(a>b ? "a is greater than b" : "b is greater than a");

// TERNARY OPERATOR
// condition ? value if true : value if false
// condition ?
// value if true :
// value if false
// EXAMPLE
let number = 1
 console.log(number % 2 ==0 ? "number is even" : "number is odd");
// EXAMPLE
//  let marks = 65
//  console.log(marks >=50 ? "you have failed the exam" : "you have passed the exam");
// EXAMPLE
//   time = 18
//  console.log(time < 12 ? "good morning" : "good afternoon");
// EXAMPLE
// let loggedin = true
// console.log(loggedin ? "welcome back user" : "please log in");
// let number = 38
// console.log(number % 2 == 0 ? "number is even" : "number is odd");

// let a = 2
// let b = 15

// console.log(a*b ?  "it is 17 ": "it is not 17");