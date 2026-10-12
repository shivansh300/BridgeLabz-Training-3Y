
 // Input age and citizenship status
const age = 19;
const isCitizen = true;

// Check eligibility using nested if-else and logical operators
if (isCitizen && age >= 18) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Eligible to vote only.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}
