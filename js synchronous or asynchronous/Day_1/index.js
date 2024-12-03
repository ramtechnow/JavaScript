// var a = 10,
//   b = 40;

// console.log(a);
// console.log(c);
// console.log(b);

// Async //

// console.log(10)
// setTimeout(function(){
// console.log("first")
// },3000);
// console.log("welcome");

//

// console.log("current time")
// setInterval(function () {
//   document.getElementById("txt").innerText = new Date().toLocaleTimeString();
// }, 1000);

//

// start & stop timing//

// let myVar;
// document.getElementById("txt").innerText = new Date().toLocaleTimeString();
// function start() {
//   myVar = setInterval(function () {
//     document.getElementById("txt").innerText = new Date().toLocaleTimeString();
//   }, 1000);
// }
// start();
// function stop() {
//   clearInterval(myVar);
// }

//

// Promise // api calling time using function//

let abc=new Promise(function(rej,res){
    setTimeout(function(){
        rej();
    },2000)
});
abc.then(function(){
    console.log("sucess")
},function(){
    console.log(fail)
});

console.log("Loading");
