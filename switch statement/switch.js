// let num=prompt("Enter Your value");
// switch(num){
//     case "1":
//         console.log("one");
//         break;
//     case "10"   :
//         console.log("ten");
//         break;
//     default:
//         console.log("Invalid");
// }


// let date=new Date().getDate();
// console.log(date);

// let day=parseInt(prompt("Enter Your Date"));//there is three methods 1)parseInt,2)Number,3)-0(0r)*1
// if(day==""){
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     default:
//      console.log("Invalid");
// }
// }
// else{
//     console.log("Invalid");
// }

let mark = prompt("Enter your mark : ");

if(mark<=100 && mark >=0 && mark.trim() != "") {
    if( mark>=35) {
        if(mark>=90) {
            console.log("Excellent");
        } else if (mark >= 80) {
            console.log("Great");
        }else if (mark >= 50) {
            console.log("very good");
        } else {
            console.log("Good")
        }
    } else {
        console.log("Fail")
    }
} else {
    console.log("Invalid")
}

// 
// console.log(mark.trim() != "");
