let listaNumerosSorte = []
let titulo = document.querySelector('h1');
titulo.innerText = 'Jogo de advinhação';

let paragrafo = document.querySelector('p');
paragrafo.innerText = 'Adivinhe o número que estou pensando entre 1 e 10';

let tentativa = 0;

function gerarNumeroAleatorio(){
  let numero = parseInt(Math.random() * 10 + 1);
  if (listaNumerosSorte.includes(numero)){
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorte.push(numero);
    console.log(listaNumerosSorte);
    return numero;
}
}
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerText = texto;
}

function mensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo de advinhação');
  exibirTextoNaTela('p', 'Adivinhe o número que estou pensando entre 1 e 10');
}

mensagemInicial(); 

function verificarChute() {
  let input = document.querySelector('input');
  let chute = parseInt(input.value);
  
  tentativa++;

  let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

  if (chute === numeroSecreto) {
    titulo.innerText = 'Parabéns, você acertou';
    paragrafo.innerText = `Você acertou o número secreto, com ${tentativa} ${palavraTentativa}`;
    document.getElementById('reiniciar').disabled = false;
  } else if (chute > numeroSecreto) {
    paragrafo.innerText = 'O número secreto é menor';
    limparCampo();
  } else if (chute < numeroSecreto) {
    paragrafo.innerText = 'O número secreto é maior';
    limparCampo();
  }
}

function limparCampo() {
  let input = document.querySelector('input');
  input.value = '';
}

function novoJogo() {
  window.location.reload(true);
}


