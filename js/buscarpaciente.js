// esses códigos é para buscar paciente em outra pagina (API) sem depender do navegado
var botaoAdicionar = document.querySelector("#adicionar-pacientes");
 botaoAdicionar.addEventListener("click", function(){

    // o XMLHttpRequest é um objeto do javascript responsavel por fazer requisição em uma pagina https
    var xhr = new XMLHttpRequest();
    // a função Open serve para abrir a concexão com o endereço https
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    // o send é responsavel por enviar a requisição dos dados da pagina https
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        console.log(resposta)
        // o responseText é para dar a resposta do xhr
        // o evento a ser escutado é quando a pagina for carregada (load)
        // typeof é para informar qual o tipo de resposta ex.string
        var pacientes = JSON.parse(resposta);
        // O JSON é uma string e um jeito de trafegar na web os objetos os formatos de dados parecido com javascript ex.array
        // o forEach serve para iterar
        pacientes.forEach( function(paciente){
            adiconaPacienteNaTabela(paciente)
        });
        
    });
    xhr.send();

});

