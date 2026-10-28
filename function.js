// let a = 10;
// let b = 20;
// console.log(sum(a,b));
// console.log(sum1(a,b));
// function sum(a,b){
//     return a+b;
// }
// const sum1 = function(a,b){
//     return a+b;
// }
// let a = 10;
// let b = 20;
// console.log(sum(a,b));
// console.log(sum1(a,b));

const login = false;
if(login){
    greet("Alice");
}
else{
    greet();

}
function greet (name = "guest"){
    console.log("Hello" + name )
}







