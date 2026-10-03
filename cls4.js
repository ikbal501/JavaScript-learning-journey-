import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });

let currentYear = new Date().getFullYear();
let birthYear = Number(await rl.question("Enter your birth year: "));

if (Number.isNaN(birthYear) || birthYear <= 0 || birthYear > currentYear) {
    console.log("you entered wrong birth year");
} else {
    let age = currentYear - birthYear;
    console.log(age);
}


rl.close();
