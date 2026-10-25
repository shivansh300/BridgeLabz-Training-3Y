"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new Error("Invalid price or quantity.");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        const match = /^(SAVE|DISC)(\d+)$/.exec(coupon);

        if (!match) {
            throw new Error("Invalid coupon format.");
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%.");
        }

        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);

console.log("Cart Items:", cart.items);
console.log("Original Total: ₹" + cart.getTotal());

try {
    const coupon = "SAVE20";
    const finalTotal = cart.applyCoupon(coupon);

    console.log("Coupon:", coupon);
    console.log("Final Total: ₹" + finalTotal.toFixed(2));
    console.log("Savings: ₹" + (cart.getTotal() - finalTotal).toFixed(2));
} catch (error) {
    console.log("Error:", error.message);
}