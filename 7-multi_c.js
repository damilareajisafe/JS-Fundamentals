const { argv } = require('node:process');
num = Number(argv[2]);

if (Number.isNaN(num)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < num; i++) {
        console.log("C is fun");
    }
};
