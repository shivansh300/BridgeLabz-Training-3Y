let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

let updatedScores = scores.map(score => score);

console.log(`Student Performance Report
Scores: ${updatedScores.join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents}`);