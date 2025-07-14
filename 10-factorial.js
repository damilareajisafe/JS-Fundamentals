const { argv } = require('node:process');

num = Number(argv[2]);

let factorial = function (num) {
    if (Number.isNaN(num)) {
        return 1;
    }
    if (num == 1) {
    return 1;
  } else {
    return num *= factorial(num - 1); // recursive call
  }
}

console.log(factorial(num));
