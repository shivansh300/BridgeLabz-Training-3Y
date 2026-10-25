"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;

            if (shouldFail) {
                reject(new Error("Bug API request failed."));
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug Tracker Report");
        console.table(bugs.map((bug, index) => ({
            ID: index + 1,
            Bug: bug
        })));
    })
    .catch(error => {
        console.log("Error:", error.message);
    });