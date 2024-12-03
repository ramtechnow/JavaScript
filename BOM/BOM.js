// BOM -screen,location, //
//Browser Object Model//

console.log(window.screen.width);

// document.getElementById("sw").style="color:red;background:green";

document.getElementById("sw").innerText = screen.width;
document.getElementById("sh").innerText = screen.height;

window.onresize = function () {
  document.getElementById("sw").innerText = screen.width;
  document.getElementById("sh").innerText = screen.height;
};
