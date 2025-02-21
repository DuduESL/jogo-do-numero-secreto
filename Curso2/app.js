let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Manipulação de texto
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

//Manipulando tags com parâmetros
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female'),
    {rate:1.2};
    /*if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }*/
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
//criando a função para o bptão chutar e novo jogo

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
        exibirTextoNaTela('p' , `O número secreto é menor`);
        }else{
            exibirTextoNaTela('p' , 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }   
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}


//////////////////////////////////////////////////////////////////////////////////////////////

//Criar uma função que exibe "Olá, mundo!" no console.

function mensagem() {
    console.log('Olá mundo');
}
mensagem()

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
    console.log(`Olá ${nome}`);
}
exibirNome('Alice')

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function recebeNumero(numero) {
    return numero * 2;
}
let resultado = recebeNumero(5);
    console.log(resultado);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calculaMedia(numeros){
    return numeros /3;
}
let media = calculaMedia(1+ 2+ 3);
    console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
    console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
    return numero * numero;
  }
  
  let valor = quadrado(2);
  console.log(valor); 