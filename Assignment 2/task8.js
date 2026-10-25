const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalCartValue = cart.reduce((total, product) => total + product.price, 0);

let discountedTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - price * 0.10;
    } else if (product.category === "fashion") {
        price = price - price * 0.05;
    }

    discountedTotal += price;
}

if (totalCartValue > 50000) {
    discountedTotal = discountedTotal - discountedTotal * 0.05;
}

console.log("Original Cart Total:", totalCartValue);
console.log("Final Total After Discounts:", discountedTotal.toFixed(2));
console.log("Total Savings:", (totalCartValue - discountedTotal).toFixed(2));