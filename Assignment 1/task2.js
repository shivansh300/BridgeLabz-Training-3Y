
 // Declare variables of different data types
const userName = "Shivansh";               // String
const userAge = 21;                         // Number
const isStudent = true;                     // Boolean
const skills = ["Java", "Python", "HTML"];  // Array
const user = { city: "Mathura" };           // Object
const middleName = null;                    // Null
let address;                                // Undefined

// Create a formatted report of all data types
const dataSummary = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: JSON.stringify(skills), Type: Array.isArray(skills) ? "Array" : typeof skills },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: "null" },
    { Label: "Address", Value: address, Type: typeof address }
];

// Print the report using one console.table() statement
console.table(dataSummary);
