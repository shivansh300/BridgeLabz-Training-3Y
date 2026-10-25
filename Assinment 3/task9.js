"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user == null || parsed.age == null) {
            throw new Error("Missing user or age");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const user = {
            user: parsed.user,
            age: age
        };

        cleanData.push(user);

        if (age < 18) {
            under18.push(user);
        }

        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Users Under 18:", under18);
console.log("Valid Count:", cleanData.length);
console.log("Error Count:", errors.length);