// Task size detacker //

onresize=function(){
  let text=document.getElementById("txt");

  if (screen.width>1500){
    text.innerText="   Desktop";
  }
  else if (screen.width>900){
    text.innerText="   Loptop";
  }
  else if (screen.width>600){
    text.innerText="   Tablet";
  }else{
    text.innerText="   Mobile";
  }
};