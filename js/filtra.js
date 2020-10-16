var campoFiltro = document.querySelector("#filtrar-tabela"); // este comando é para todo evento que for feito no input ajudar na localização do nome no filtro
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i")// esse comando é para facilitar a busca na lista onde faz uma busca de texto
            // esse como se fosse uma string i quer dizer que vai verificar se for letra maiuscula ou minuscula
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");

        }
    }
    

})

