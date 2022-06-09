export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let valorTotal = 0;
limparSaldo();

function somarAoSaldo(soma) {

    if( campoSaldo ){   
    valorTotal += soma;
    campoSaldo.innerHTML = valorTotal.toString();
    limparSoma();
    }
}


function limparSaldo() {
    if( campoSaldo ){
    valorTotal = 0;
    campoSaldo.innerHTML = valorTotal.toString();
    }
}

if(botaoAtualizar){
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
}

if(botaoLimpar){
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
}


function limparSoma() {
    soma.value = '';
}


