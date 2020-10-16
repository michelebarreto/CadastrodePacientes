
// Aqui será adiconado um novo paciente na lista

 var botaoadicionar = document.querySelector("#adicionar-paciente"); botaoadicionar.addEventListener("click", function () {
    event.preventDefault(); event.stopPropagation();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informaçoes do paciente Form 
    var paciente = obtemPacientedoFormulario(form);

    var pacienteTr= montarTr(paciente);
    var erro = validaPaciente(paciente) // esse coando é para quando for validar o formulario e o usuario colocar alguma informação errada
    

    if(erro.length > 0){ // aqui ele valida e verifica se será adicionado na tabela ou não
       exibeMensagensDeErro(erro);

        return;
    }

    adiconaPacienteNaTabela(paciente);

    function exibeMensagensDeErro(erro){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML= "" // o innerHTML permite voce controlar o html interno de um documento
        erro.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

    // criar a tr e td do pacidente
      //  1 opçao Extraido informações dp paciente do Form
   /* var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    */
   // 2 opção
    function obtemPacientedoFormulario(form){// aqui foi criado um objeto para extrair informaçoes do pacinete
        var paciente = {
            nome:form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calcularImc(form.peso.value, form.altura.value)
        }

        return  paciente;
    
    }

    // Aqui cria a Tr e a Td do paciente
    // 1 forma de fazer a criação da Tr
   /* var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd)*/

    // Adiconando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset (); // aqui é o comando para limpar a tela depois de vc escrever um paciente
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = "";


    // 2 forma de fazer a criação da TR

    function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    // adicionando o Td na classe paciente o metodo .add adiciona a classe que dermos o nome
    pacienteTr.classList.add("paciente"); 

   var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome"); //adicionando a classe obs: ver no cosole o resultado
    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    var nomeTd = montarTd(paciente.nome, "info-nome")// aqui é a segunda opção de codigo para o montar td acima
    var pesoTd = montarTd(paciente.peso, "info-peso")
    var alturaTd = montarTd(paciente.altura, "info-altura")
    var gorduraTd = montarTd(paciente.gordura, "info-gordura")
    var imcTd = montarTd(paciente.imc, "info-imc")
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /* Aqui é uma segunda forma de fazer a linha de código acima

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));*/


    return pacienteTr;

    }
   // essa funcição é para criar uma Td
    function montarTd(dado, classe){
        var td= document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe)
        return td;


    }

});

// esta função serve para adicionar os paciente que estão na pagina https de forma correta na lista de pacientes
function adiconaPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
 function validaPaciente(paciente){

    var erros = []; // aqui é criado um Array de erros

    if (paciente.nome.length ==0){
        erros.push("O nome não pode ser em branco !")
    }

   if (!validaPeso(paciente.peso)){     
    erros.push ("O Peso é Inválido !"); // o comando push é para adicionar ou empurrar algo para dentro do array
   }
       if(!validaAltura(paciente.altura)){ // o simbolo ! é para verificar se sim ou não
        erros.push ("Altura Inválida !")
     }

     if(paciente.gordura.length ==0){
         erros.push("A gordura não pode ser em branco !")
     }
      return erros;
    }