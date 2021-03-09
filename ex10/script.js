function imposto(custo, imposto){
    var resp = document.getElementById("button");
    var custo = parseFloat(document.getElementById("num1").value);
    var imposto = parseFloat(document.getElementById("num2").value)
    var total = custo + (custo * (imposto/100))
    
    // document.write(custo +" Reais Custo do Produto " + "| Com imposto: "+ total+ " Reais")
    button.innerHTML = (" Custo do Produto: "+ custo +  "<br/>\n" +" Com imposto: "+ total )
  }