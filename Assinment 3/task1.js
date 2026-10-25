"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Original: ${String(value)}, Number: ${numberValue}, Boolean: ${booleanValue}, String: ${stringValue}`);

    // Reject empty strings, whitespace, and values that cannot be converted to valid numbers.
    if (typeof value === "string" && value.trim() === "") {
        invalidNumbers.push(value);
    } else if (Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);