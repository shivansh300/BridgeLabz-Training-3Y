
 // Store marks of 5 subjects (each out of 100)
const marks = [85, 90, 78, 88, 92];

// Calculate total marks
let total = 0;

for (let mark of marks) {
    total += mark;
}

// Calculate average and overall percentage
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
const failed = marks.some(mark => mark < 35);

// Display academic performance
console.log("Academic Performance Report");
console.log("---------------------------");
console.log(`Total Marks: ${total}/${marks.length * 100}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

// Evaluate promotion status using logical operators
if (failed || percentage < 50) {
    console.log("Result: Detained");
} else if (percentage >= 85 && !failed) {
    console.log("Result: Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85 && !failed) {
    console.log("Result: Promoted");
}
