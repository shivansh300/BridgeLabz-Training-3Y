"use strict";

function runStage(stage, callback) {
    setTimeout(() => {
        console.log(stage);
        callback();
    }, 1000);
}

function callbackPipeline() {
    runStage("Design", () => {
        runStage("Build", () => {
            runStage("Test", () => {
                runStage("Deploy", () => {
                    runStage("Celebrate", () => {
                        console.log("Callback pipeline completed!");
                    });
                });
            });
        });
    });
}

function runStageAsync(stage) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stage);
            resolve();
        }, 1000);
    });
}

async function asyncPipeline() {
    await runStageAsync("Design");
    await runStageAsync("Build");
    await runStageAsync("Test");
    await runStageAsync("Deploy");
    await runStageAsync("Celebrate");

    console.log("Async pipeline completed!");
}

console.log("Callback Hell Version:");
callbackPipeline();

// The second pipeline starts after the first one finishes.
setTimeout(async () => {
    console.log("Async/Await Version:");
    await asyncPipeline();
}, 5100);

// async/await makes sequential asynchronous steps easier to read.
// Errors can be handled with ordinary try/catch blocks.