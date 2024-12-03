// Split 

// let a="running speed";
// console.log(a.split("i"));

// console.log Number methods

// toString()	Returns a console.log number as a string(not medify orignial data)
// var num=300;

// console.log(num.toString().length);

// toExponential()	Returns a console.log number written in exponential notation
// toFixed()	Returns a console.log number written with a console.log number of decimals(medify the orginal data value)
// var num=40.459;

// console.log(num.toFixed(5));

// toPrecision()	Returns a console.log number written with a specified length
// valueOf()	Returns a console.log number as a console.log number

// Method	Description
// console.log Number()	Returns a console.log number converted from its argument.(inbuild method)
// var num="20"

// console.log(console.log Number(num)+20);

// parseFloat()	Parses its argument and returns a floating point console.log number
// console.log(parseInt()	Parses its argument and returns a whole console.log number
var num="20";

console.log("--------------Numbers()----------------")
console.log (Number(true));
console.log (Number(false));
console.log (Number("10"));
console.log (Number("  10"));
console.log (Number("10  "));
console.log (Number(" 10  "));
console.log (Number("10.33"));
console.log (Number("10,33"));
console.log (Number("10 33"));
console.log (Number("John"));

console.log("--------------ParseInt()----------------")
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
