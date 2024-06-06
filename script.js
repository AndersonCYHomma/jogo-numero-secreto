
var numeroSorteado = sortearNumeroAleatorio();
var tentativas = 0;
console.log(numeroSorteado);

function sortearNumeroAleatorio() {
    let numeroRandom = parseInt(Math.random() * 10 + 1);    
    return numeroRandom;
}

document.querySelector('input').addEventListener('keyup',function(event) {
    if (event.key === "Enter") {
        
        verificarNumero();
        mostrarTextoTela('input','');
    }
});


mostrarMensagemInicial();

function verificarNumero() {
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSorteado) {
        mostrarTextoTela('h1', 'Parabéns!');
        mostrarTextoTela('p', 'Você acertou o número secreto!');
        document.getElementById('chutar').setAttribute('disabled',true)
        document.getElementById('reiniciar').removeAttribute('disabled');
        resetar();
        
    } else {
        if (chute > numeroSorteado) {
            mostrarTextoTela('p', 'O número secreto é menor');
        } else {
            mostrarTextoTela('p', 'O número secreto é maior');
        } 
        
        if (chute > 10){
            mostrarTextoTela('p', 'O número está fora da faixa de chute');
        } 
        tentativas++;
        resetar();
        }
    if (tentativas == 2) {
        mostrarTextoTela('h1', 'Fim do Jogo');
        mostrarTextoTela('p', 'Você perdeu. Comece um novo jogo. ')
        document.getElementById('chutar').setAttribute('disabled',true)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function mostrarTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function mostrarMensagemInicial() {
    mostrarTextoTela('h1', 'Acerte o número secreto');
    mostrarTextoTela('p', 'Escolha um número entre 1 e 10');
}


function resetar() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    var numeroSorteado = sortearNumeroAleatorio();
    resetar();
    tentativas = 0;
    mostrarMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    document.getElementById('chutar').removeAttribute('disabled');
    return numeroSorteado;
}
