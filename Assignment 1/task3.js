
 // Store expenses for five categories
const expenses = [ 
    { category: "Food", amount: 5000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

// Calculate total expenses using an assignment operator
let total = 0;

for (let expense of expenses) {
    total += expense.amount;
}

// Calculate average monthly expense
const average = total / expenses.length;

// Add 10% tax to the total
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display the results rounded to two decimal places
console.log("Monthly Expense Summary");
console.log("-----------------------");
console.log(`Total Expenses: Rs. ${total.toFixed(2)}`);
console.log(`Average Expense: Rs. ${average.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: Rs. ${finalAmount.toFixed(2)}`);
