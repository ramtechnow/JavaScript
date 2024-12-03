//BOM Location //

// console.log(window.location);

let name = "Ram",
  password = "Ram@123";

function redirect() {
  let n = document.getElementById("fname"),
    pa = document.getElementById("pa");
  if (n.value === name && pa.value === password) {
    window.location.href = "https://www.youtube.com/";
  } else {
    alert("Please Enter your correct name and password :");
  }
}
