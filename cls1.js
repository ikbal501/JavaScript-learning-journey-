// primitive data types

// Number, String, Boolean, Undefined, Bigint, Null,

//1. number 
let num = 20;
let num2 = 1.78;
console.log(num, num2);

// string 

let userName = "ikbal";
const email = 'ikbalahmed@gmail.com';
console.log(userName, email);

//boolean

let isloged = true;
let ispass = false;
console.log(isloged, ispass);

// undefined 

let temp;
console.log(temp);

//big int

let num3 = 178468885297896523587458n;
console.log(num3);

// Null

let temp2 = null;
console.log(temp2);

// Non primitive data types

// Array, Object, Function

// Array 

let arr3 = [10, 20, 'ikbal', true]
console.log(arr3);

// Object 

let user3 = {
    name: "ikbal",
    age: 20,
    accNum: 580770780700,
    email: "ikbalahmed@gmail.com"
}

console.log(user3);

//Function

function abstc(a, b) {
    console.log(a + b);
    return a + b;
}

abstc(3, 2);

console.log("typeof");


// Typeof primitive data type

console.log(typeof num, typeof num2);
console.log(typeof userName, typeof email);
console.log(typeof isloged, typeof ispass);
console.log(typeof temp);
console.log(typeof num3);
console.log(typeof temp2);


console.log("-----------------------------------------");
console.log("\n");

// Typeof non-primitive data type


console.log(typeof abstc);


// Primitive data type are immutable

let name2 = "ikbal ahmed";
name2[0] = "e"; //this is not possible because of javascript primitive immutable behavour.

console.log(name2);



// Non-primitive data type are mutable

const arr2 = [10, 78, 158, 20];
arr2[1] = 80

console.log(arr2);

const obj = {
    name: "shirin",
    age: 22,
    cls: "4th sem"
}

obj.name = "ikbal"
console.log(obj);

//Pass by value

let a = 10;
let b = a;
b = 20;

console.log(a, b);

//Pass by reference

let user = {
    name: "ikbal",
    age: 20,
    height: "6ft"
}

let user2 = user;
user2.name = "shirin";

console.log(user);

const arr = [1, 4, 7, 8];
arr.push(12);

console.log(arr);
console.log(typeof arr);
console.log(typeof user);
