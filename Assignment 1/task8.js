
 // Declare current salary and annual increment rate
let currentSalary = 30000;
const incrementRate = 10;

// Create an array to store yearly salary details
const salaryProjection = [];

// Calculate salary projection for 5 years
for (let year = 1; year <= 5; year++) {
    // Apply the annual increment using an assignment operator
    currentSalary += currentSalary * incrementRate / 100;

    // Round the salary to the nearest rupee
    currentSalary = Math.round(currentSalary);

    // Store the year and salary in the array
    salaryProjection.push({
        Year: year,
        "Annual Increment": `${incrementRate}%`,
        "Yearly Salary (Rs.)": currentSalary
    });
}

// Display the projection in a formatted table
console.table(salaryProjection);
