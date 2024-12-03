// var inst = [{
//     name: "Ram",
//     course: "Digital Marketing",
//     place : "Madurai"
//   },
//   {
//     name: "Tamil",
//     course: "Back-end Developement",
//     place : "chennai"
//   },
//   {
//     name: "Lakshmi",
//     course: "Digital Marketing",
//     place : "Mumbai"
//   },
//   {
//     name: "Zoya",
//     course: "Front-end Developement",
//     place : "chennai"
//   },
//   {
//     name: "Maya",
//     course: "Back-end Developement",
//     place : "Mumbai"
//   },
//   {
//     name: "kavya",
//     course: "Digital Marketing",
//     place : "Delhi"
//   },
//   ], Totalcount = 0, front = [], back = [], digi = [];

//   for(var z=0; z<inst.length; z++) {
//     Totalcount++; 
//     if(inst[z].course == "Front-end Developement") {
//         front.push(inst[z].name);
//     }else if(inst[z].course == "Back-end Developement") {
//         back.push(inst[z].name);
//     }else {
//         digi.push(inst[z].name);
//     }
//     // console.log(inst[z].name);
//   };

//   console.log(Totalcount = ${Totalcount});
//   console.log(Front = ${front});
//   console.log(back = ${back});
//   console.log(digi = ${digi});

// 
// var fritus=["mango","apple","orange"]
// line=""
// for(var i=0;i<fritus.length;i++){
//     // console.log(fritus[i]);
//     line+=fritus[i]+" ";
// }
// console.log(line);

// var line=""
// for(var x=1;x<=5;x++){
    // for(var y=1;y<=x;y++){
    //    line+="*"; 
    // line+=x;
// }
// line+="*";
// line+="\n"
// };
// console.log(line);

// function reversePattern(n) {
//     for (let i = n; i >= 1; i--) {
//         let str = '';
//         for (let j = 1; j <= i; j++) {
//             str += j;
//         }
//         console.log(str);
//     }
// }

// reversePattern(5);


// var fritus=["mango","apple","orange","grapes"];
// var m=fritus[0];
// console.log(m);

// Destructing 
// let fritus=["mango","apple","orange","grapes"];

// let [m,a,o,g] = fritus;
// console.log(o,g);

let fritus=["orange",["mango","grapes"],"apple"];

let[a1,[b1,b2],a2] =fritus;

console.log(b1)