function simple() {
  let a = document.getElementById("Value1").value,
    b = document.getElementById("Value2").value,
    operation = document.getElementById("oper").value,
    ans = document.getElementById("result");

//   console.log(operation);
//   if (operation == "add") {
//     ans.innerText = (a-0) + (b-0);
//   } else if (operation == "sub") {
//     ans.innerText = a - b;
//   } else if (operation == "mul") {
//     ans.innerText = a * b;
//   } else if (operation == "div") {
//     ans.innerText = a / b;
//   } else {
//     ans.innerText = "Invalid";
//   }
switch (operation) {
    case "add":
      ans.innerText = (a - 0) + (b - 0);
      break;
    case "sub":
      ans.innerText = a - b;
      break;
    case "mul":
      ans.innerText = a * b;
      break;
    case "div":
      ans.innerText = a/b;
      break;
    default :
        ans.innerText = "Invalid"
  }

}
