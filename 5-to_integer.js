const { argv } = require('node:process');

let num = Number(argv[2]);

if (Number.isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
};
