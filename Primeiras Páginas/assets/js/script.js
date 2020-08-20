/* Esse é o meu primeiro código em JavaScript! */

/* Formas de acessar o DOM:

Por tag: getElementByTagName()
Por query: uqerySelector
Por id: getElementById
Por nome: getElementsByName()
Por classe: getElementsByClassName()

*/

//Declarando as váriáveis
let nome = window.document.querySelector("#nome");
let email = window.document.querySelector("#email");
let assunto = window.document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

//Validação de nome
function validaNome() {
  let txtNome = window.document.querySelector("#txtNome");

  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
    nomeOk = true;
  } else {
    txtNome.innerHTML = "Nome Válido";
    txtNome.style.color = "green";
  }
}

//Validação de E-mail
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail Inválido";
    txtEmail.style.color = "red";
    emailOk = true;
  } else {
    txtEmail.innerHTML = "E-mail Válido";
    txtEmail.style.color = "green";
  }
}

//Validação de assunto
let txtAssunto = window.document.querySelector("#txtAssunto");

if (assunto.value.length > 100) {
  txtAssunto.innerHTML = "Maneira ai no textão né?";
  txtAssunto.style.color = "red";
  txtAssunto.style.display = "block";
  assuntoOk = true;
} else {
  txtAssunto.style.display = "none";
}

//Validação fake do botão

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário!");
  }
}
