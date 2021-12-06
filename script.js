function somenteNumeros(e) {
  //Função que impede que caracteres que não sejam números sejam digitados no campo CPF.
  var charCode = e.charCode ? e.charCode : e.keyCode;
  // charCode 8 = backspace
  // charCode 9 = tab
  if (charCode != 8 && charCode != 9) {
    // charCode 48 equivale a 0
    // charCode 57 equivale a 9
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
}

function enviarDados() {
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var endereco = document.getElementById("endereco").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado");
  var option = estado.options[estado.selectedIndex].value;
  if (
    (nome == "") |
    (cpf == "") |
    (email == "") |
    (endereco == "") |
    (cidade == "") |
    (option == "Selecione o Estado") //Condicional para verificar se os campos estão vazios.
  ) {
    var obrigatorio = document.getElementById("campo-obrigatorio");
    obrigatorio.innerHTML = "Todos os campos são obrigatórios.";
    return;
  } else if (cpf.length > 11) {
    //Condicional para verificar se o CPF tem mais de 11 números.
    var tamanho = document.getElementById("tamanho");
    tamanho.innerHTML = "CPF Inválido.";
    return;
  }
  mostrarDados(); //Chamada da função que mostra os dados.
  document.getElementById("nome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("email").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "Selecione o Estado";
  //Os getElementById acima foram feitos para que os campos fossem apagados após os dados serem mostrados.
  apagarMensagem();
}

function apagarMensagem() {
  var campoObrigatorio = document.getElementById("campo-obrigatorio");
  campoObrigatorio.innerHTML = null;
  var tamanho = document.getElementById("tamanho");
  tamanho.innerHTML = null;
  //Função que apaga as mensagens de dados obrigatórios e de CPF inválido.
}

function mostrarDados() {
  var elementoNome = document.getElementById("nome").value;
  var elementoCpf = document.getElementById("cpf").value;
  var elementoEmail = document.getElementById("email").value;
  var cpfFormatado = elementoCpf.replace(
    /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
    function (matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
      console.log(arguments);
      return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
    }
  ); //Essa função coloca os pontos e o traço no CPF digitado.

  var elementoEndereco = document.getElementById("endereco").value;
  var elementoCidade = document.getElementById("cidade").value;
  var elementoOption = estado.options[estado.selectedIndex].value;
  var sucesso = document.getElementById("sucesso");
  sucesso.innerHTML = "Dados gravados com sucesso!";
  resultadoNome.innerHTML = "Nome: " + elementoNome;
  resultadoCpf.innerHTML = "CPF: " + cpfFormatado;
  resultadoEmail.innerHTML = "E-mail: " + elementoEmail;
  resultadoEndereco.innerHTML = "Endereço: " + elementoEndereco;
  resultadoCidade.innerHTML = "Cidade: " + elementoCidade;
  resultadoOption.innerHTML = "Estado: " + elementoOption;
  //innerHTML mostra na tela os dados que foram inseridos.
}
