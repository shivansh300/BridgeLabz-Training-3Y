"use strict";

function outer() {
    console.log("Outer before assignment:", count);

    var count = 5;

    function inner() {
        console.log("Inner before assignment:", count);

        var count = 10;

        console.log("Inner after assignment:", count);
    }

    inner();

    console.log("Outer after inner:", count);
}

outer();

function outerArrowDemo() {
    let count = 5;

    const innerArrow = () => {
        console.log("Arrow reads outer count:", count);
    };

    innerArrow();
}

outerArrowDemo();

// Debug tip: Set breakpoints on each console.log and inspect Local and Closure scopes.