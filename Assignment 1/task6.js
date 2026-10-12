
 // Input the total purchase amount
const totalAmount = 12000;

// Initialize discount percentage
let discountPercentage = 0;

// Apply discount based on purchase amount
if (totalAmount >= 10000) {
    discountPercentage = 25;
} else if (totalAmount >= 5000) {
    discountPercentage = 15;
} else if (totalAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount amount
const discountAmount = totalAmount * discountPercentage / 100;

// Calculate final price after discount
const finalPrice = Math.round(totalAmount - discountAmount);

// Display the shopping summary
console.log("Shopping Discount Summary");
console.log("-------------------------");
console.log(`Original Total: Rs. ${Math.round(totalAmount)}`);
console.log(`Discount Percentage: ${discountPercentage}%`);
console.log(`Discount Amount: Rs. ${Math.round(discountAmount)}`);
console.log(`Final Price: Rs. ${finalPrice}`);
