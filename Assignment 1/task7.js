
 // Generate a random secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
const userGuess = 25;

// Check the user's guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within ±3 of the secret number
    if (userGuess >= secretNumber - 3 &&
        userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } else {
        // Determine whether the guess is too high or too low
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}
