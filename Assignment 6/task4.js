"use strict";

function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                console.log(`${serverName} responded.`);
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all succeeds only if both deployments succeed.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log("Deployment error:", error.message);
    });

// Promise.race settles as soon as either Promise settles.
// If the first response is a rejection, race rejects too.
Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Race error:", error.message);
    });