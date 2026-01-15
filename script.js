const chalk = require('chalk');

const firstNumber = Math.random() * 100;
const secondNumber = Math.random() * 100;

const sum = firstNumber + secondNumber;

console.log(chalk.yellow('Сумма двух случайных чисел: ' + sum));
