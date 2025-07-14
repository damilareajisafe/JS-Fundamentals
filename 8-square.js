const { argv } = require('node:process');
num = Number(argv[2]);
let len = "";

if (Number.isNaN(num)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < num; i++) {
        len += "X";
    }

    for (let j = 0; j < num; j++) {
        console.log(len);
    }
};
