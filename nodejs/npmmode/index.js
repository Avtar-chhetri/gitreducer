
// import chalk from "chalk"

// const chalk =require("chalk");
// const chalk =require('chalk');


import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

// const validator = require('validator');
import validator from 'validator';



const valid=validator.isEmail('foobar.om');
console.log(valid?chalk.green.inverse(valid):chalk.red.inverse(valid))





// console.log(chalk.blue('Hello world!'));


