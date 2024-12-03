// var num=prompt("Enter number to know positive or negative or zero :");

// console.log(typeof num);

// if(num>0){
//     console.log("Positive number");
// }
// else if(num<0){
//     console.log("Negative number");
// }
// else if(num==0){
//     console.log("Zero");
// }
// else{
//     console.log("Not a Number")
// }

let num = prompt("Enter the number of ceridits :")

console.log(typeof num);

if(num>=101 || num<0 || num==""){
    console.log("invaild grade")
}
else if(num>=90){
    console.log("Excelent")
}
else if(num>=70){
    console.log("great");
}
else if(num>=60){
    console.log("very good");
}
else if(num>=45){
    console.log("good");
}
else if(num>=35){
    console.log("try to improve");
}
else if(num<=35){
    console.log("Fail");
}
else{
    console.log("Not a Number")
}