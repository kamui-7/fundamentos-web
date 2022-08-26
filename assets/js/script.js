
/*
Case Sensitive = reconhece letras maiusculse minusculas

por Tag : getElementByTagName()
por ID : getElementById()
por Nomes: getElementsByName()
por Classes: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = "red"
        txtNome.style.display = 'block'
    } else {
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = "red"
        txtEmail.style.display = 'block'
    } else {
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 150) {
        txtAssunto.innerHTML = 'Limite de caracteres excedido.'
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else if (assunto.value.length < 15) {
        txtAssunto.innerHTML = 'Caracteres insuficientes.'
        txtAssunto.style.color = "orange"
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulario enviado! Entrarei em contato em breve, obrigado.')
    } else {
        alert('Preencha o formulario corretamente, verifique seu nome, e-mail e o assunto.')
    }
}

function zoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function normal() {
    mapa.style.width = '400px'
    mapa.style.height = '400px'
}
