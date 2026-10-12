
 // Generate two random numbers between 1 and 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
const operators = ['+', '-', '*', '/'];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

// Calculate the correct answer using switch
let correctAnswer;

switch (operator) {
    case '+':
        correctAnswer = num1 + num2;
        break;

    case '-':
        correctAnswer = num1 - num2;
        break;

    case '*':
        correctAnswer = num1 * num2;
        break;

    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;

    default:
        console.log("Invalid operator");
}

// Display the question and answer
console.log("Random Math Quiz");
console.log("----------------");
console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
