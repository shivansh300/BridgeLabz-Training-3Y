"use strict";

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]}: Success - ${result.value}`);
        } else {
            console.log(`${moduleNames[index]}: Failed - ${result.reason}`);
        }
    });

    console.log("Total time:", Date.now() - startTime, "ms");
}

loadDashboard();