let promise1 = new Promise ((resolve,reject)=>{
    let success= true;
    if(success){
        resolve("promise fulfilled");
    }
    else{
        reject("Promise rejected");
    }
});
promise1.then((message)=>{
    console.log("Print:" + message);
}).catch((error)=>{
    console.log("Error:" + error);
});

function pizzaReady (callback){
    console.log("pizza is ready");
    callback();
}
function notifyCustomer(){
    console.log("Hello sir, your pizza is ready");
}
pizzaReady(notifyCustomer);

function getuser(){
    setTimeout(()=>{
        console.log("shivansh");
    },1000);
}

function UserCalled(){
    getuser();
    console.log("Finished");
}
UserCalled();
console.log("Starting")

