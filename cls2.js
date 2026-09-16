/************** 1 */


import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const name = await rl.question("Enter your name: ");
const age = await rl.question("Enter your age: ");
const city = await rl.question("Enter your city: ");
const profession = await rl.question("Enter your profession: ");

console.log("\nPersonal Information");
console.log("--------------------");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Profession:", profession);

rl.close();

//*************** 2  */

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const tmp = Number(await rl.question("Enter temperature: "));
const unit = await rl.question("Enter unit (C/F): ")

if (unit.toUpperCase() === "C") {
    const fahren = (tmp * 9 / 5) + 32;
    console.log(`${tmp}°C = ${fahren}°F`);
} else if (unit.toUpperCase() === "F") {
    const celsi = (tmp - 32) * 5 / 9;
    console.log(`${tmp}°F = ${celsi}°C`);
} else { console.log("invalid unit") };

rl.close();

/******************** 3 */

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl2 = readline.createInterface({ input, output });

const redius = Number(await rl2.question("Enter redius of circle: "));

const area = Math.PI * redius * redius;
console.log(area);

rl.close();

/***************** 4 */


import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl3 = readline.createInterface({ input, output });

const num1 = Number(await rl3.question("enter 1st number: "));
const oper = await rl3.question("enter any operator you want (+, -, *, /, %): ");
const num2 = Number(await rl.question("enter 2nd number: "));

if (oper === "+") {
    const plus = num1 + num2;
    console.log(plus);
} else if (oper === "-") {
    const minus = num1 - num2;
    console.log(minus);
} else if (oper === "*") {
    const multi = num1 * num2;
    console.log(multi);
} else if (oper === "/") {
    const dive = num1 / num2;
    console.log(dive);
} else if (oper === "%") {
    const remin = num1 % num2;
    console.log(remin);
} else {
    console.log("you entered wrong value");
}

rl.close();

/******************* 5 */

import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl4 = readline.createInterface({ input, output });

const prinAmount = Number(await rl4.question("Enter principal amount: "));
const time = Number(await rl4.question("Enter tenure: "));
const rate = Number(await rl4.question("Enter interest rate: "));

const interest = (prinAmount * time * rate) / 100;

console.log(`total interest have to pay: ${interest}`);
console.log(`total repayment amount: ${interest + prinAmount}`);

rl.close();

/***************** 6 */

let a = 10;
let b = 20;
console.log(a);
console.log(b);
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);
