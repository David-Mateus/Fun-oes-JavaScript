


function maior(x, y, z){
var x = parseFloat(document.getElementById("x").value);
var y = parseFloat( document.getElementById("y").value);
var z = parseFloat(document.getElementById("z").value);
var resp = document.getElementById("button");
    if(x > y && x > z){
    button.innerHTML = ("X é maior");
    console.log("1maior")
  }else if(y > z){
    button.innerHTML = ("Y é maior");
    console.log("2maior")
  }else{
    button.innerHTML = ("Z é maior");
    console.log(z+"6maior")
  }

}
function menor(x, y, z){
var x = parseFloat(document.getElementById("x").value);
var y = parseFloat( document.getElementById("y").value);
var z = parseFloat(document.getElementById("z").value);
var resp = document.getElementById("button");
  if(x < y && x < z){
    butao.innerHTML = ("X é menor");
    console.log(x+"4maior")
  }else if(y < z){
    butao.innerHTML = ("Y é menor")
    console.log(y+"5maior")
  }else{
    butao.innerHTML = ("Z é menor")
    console.log(z+"6maior")
  }
}

