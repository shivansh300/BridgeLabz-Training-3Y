"use strict";

const input = 5;
const rows = Number.isInteger(input) && input > 0 ? input : 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

// With var, the variable is function-scoped rather than block-scoped.
for (var i = 1; i <= 4; i++) {
    var pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
}

console.log("Final i:", i);
console.log("Final j:", j);