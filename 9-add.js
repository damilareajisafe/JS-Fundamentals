const { argv } = require('node:process');
num1 = Number(argv[2]);
num2 = Number(argv[3]);

const sum = (num1, num2) => {
    return num1 + num2;
};

let result = sum(num1, num2);

console.log(result);
