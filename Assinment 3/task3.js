"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NullEntryError");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new Error("MissingPropertyError");
        }

        if (transaction.amount < 0) {
            throw new Error("NegativeAmountError");
        }

        valid.push(transaction);
        console.log("Valid Transaction:", transaction);
    } catch (error) {
        invalid.push({
            transaction: transaction,
            error: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);

// Debug tip: Set a breakpoint inside the try block to inspect transaction and both arrays.