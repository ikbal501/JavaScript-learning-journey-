import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let num = Number(await rl.question("enter any number: "));
let num2 = Number(await rl.question("enter any number"));
