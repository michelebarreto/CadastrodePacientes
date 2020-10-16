var pacientes = document.querySelectorAll(".paciente")//aqui estamos buscando pelo nome do ID sempre quando for ID coloar o #
for(var i = 0;i < pacientes.length; i++ ){
    var paciente = pacientes [i]
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent // aqui vai mostra o texto que esta na variavel tdPeso
    
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    
    var tdImc = paciente.querySelector(".info-imc")
    
    //opção 1
    /*if(peso < 0){
        console.log("Peso Invalido!");
    }
    else(peso > 1000)
        console.log("peso invalido!");
    */
    
    //opção 2
    /*if(peso < 0 || peso > 1000){
        console.log("Peso Invalido !")
    }
    
    if (altura < 0 || altura > 3.000){
        console.log("Altura Invalida !!")
    }
    */
    // agoar eu quero que faça o calculo somente se  for um valor valido
    
    var pesoEValido = validaPeso(peso); // aqui será true ou false
    var alturaEValida = validaAltura(altura);
    // só entra nesse if se o valor for invalido
    if (!pesoEValido){ // o sinal de ! serve para inverte os valores de positivo e negativo
        console.log("Peso Invalido !")
        pesoEValido = false
        tdImc.textContent="Peso Invalido !"
        paciente.style.backgroundColor = "red" // aqui se o peso for invalido a letra vai ficar vermelha
    }
    if (!alturaEValida){
        console.log("Altura Invalida !")
        alturaEValida = false
        tdImc.textContent ="Altura Invalida !"
    }

    if (alturaEValida && pesoEValido){
    var imc = calcularImc(peso,altura) //aqui estamos informando que primeiro ele deve multiplicar a altura
    tdImc.textContent= imc;
    }
}
 function validaPeso(peso){
  if (peso >=0 && peso < 1000){
      return true
  }else{
      return false;

  }

 }

 function validaAltura(altura){
    if (altura >=0 && altura < 3.0){
        return true
    }else{
        return false;
  
    }
  
   }
function calcularImc (peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}
    
    
  

    










    






//console.log(paciente)
//console.log(tdAltura)
//console.log(altura)