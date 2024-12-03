// console.log(document.getElementById("txt"));

// console.log(document.getElementById("txt").innerText);

// document.getElementById("txt").innerText = "Welcome devlopers";

// document.getElementById("txt").style = "color:red;background:lightgreen;width:300px;border-radius:5px;border:3px solid black;padding:10px;box-shadow:1px 1px 10px black";

// function change(){
//     // document.getElementById("click").innerText = "Welcome devlopers";

//     document.getElementById("click").style = "color:red;background:lightgreen;width:160px;border-radius:5px;border:3px solid black;padding:10px;box-shadow:1px 1px 10px black;border:none;font-size=30px";
// };
// // change();

// var userInput =prompt("Enter Your Value :");
// document.getElementById("txt").innerText=userInput;

// var a = Number(prompt("Enter A Value")),
// b = Number(prompt("Enter B Value")),
// aData = document.getElementById("Avalue"),
// bData = document.getElementById("Bvalue"),
// AnsData = document.getElementById("ans");

// aData.innerText = a;
// bData.innerText = b;

// function add() {
//     AnsData.innerText = a+b;
// }
// function sub() {
//     AnsData.innerText = a-b;
// }
// function mul() {
//     AnsData.innerText = a*b;
// }
// function div() {
//     AnsData.innerText = a/b;
// }

// name chanage method using js

// var data= true;
// function change(){
//     console.log("before Not Operator data ="+ data);
//     data = !data; //!data is false
//     console.log("Aefore Not Operator data ="+ data);
//     console.log("------------------------------------")
// if(data===true){
//     document.getElementById("txt").innerText="Hello devlopers";
// }
// else{
//     document.getElementById("txt").innerText="Welcome Developers"
// }
// }

// function change(){
//     console.log(document.getElementById("in").value);
//     let inputData=document.getElementById("in");
//     document.getElementById("txt").innerText=inputData.value;
//     inputData.value="";

//     let Back=(document.getElementById("in").value);
//     document.getElementById("clr").style.background=Back;
//     Back.value="";

// }
    // alternative coding

    function change() {
        console.log(document.getElementById("in").value);
        let InputData = document.getElementById("in");
        document.getElementById("clr").style = "background-color : "+InputData.value;
        InputData.value = "";
    }

