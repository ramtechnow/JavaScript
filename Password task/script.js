// // 
var a;
function pass()
{
    if(a==1)
{
document.getElementById('password').type="password";
document.getElementById('pass-icon').src="./Assets/hidden.png";
a=0;
}
else{
    document.getElementById('password').type="text";
    document.getElementById('pass-icon').src="./Assets/eye.png";
    a=1;
}
}
