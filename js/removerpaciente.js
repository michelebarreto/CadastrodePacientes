var paciente = document.querySelectorAll(".paciente")

/* 1 opção de excluir
paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick", function()
    { this.remove(); // esse comando é para remover um paciente da lista com um duplo click

    })

})*/

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
   event.target.parentNode.classList.add("fadeOut") // aqui vai fazer a exclusão sumir lentamente
   setTimeout(function(){
 
     event.target.parentNode.remove() //usando somente essa linha tambem funciona
   },500);
   if (event.target.tagName == "TD"){
     event.target.parentNode.remove()
   }
   // ou essa opção abaixo
    /*var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode // o parentNode serve para pegar quem foi clicado
     paiDoAlvo.remove()*/

});

