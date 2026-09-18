
let screen = document.getElementById("screen");

function calc(val){
  if(val == "C"){
    screen.value = "";
  }
  else if(val == "="){
    try{
      screen.value = eval(screen.value);
    }catch{
      screen.value = "Error";
    }
  }
  else{
    screen.value += val;
  }
}
