"use strict";

function applyOperation(numbers, operation) {
    // Apply the callback to every array element.
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, num => num * 2);
const squaredNumbers = applyOperation(numbers, num => num * num);

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);