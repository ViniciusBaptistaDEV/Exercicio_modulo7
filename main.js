
document.getElementById('calcula_numero').addEventListener('submit', function(event) { //selecionei o formulário, depois recebi o clique no botão e criei a função event (que é o que vai acontecer depois que o usuário clicar no botão)
   event.preventDefault() //impede o envio do formulário, para não reiniciar a página

    let mensagemresultado = document.querySelector('.resultado');
    let numero1 = parseFloat (document.getElementById('number1').value); //variável está recebendo o valor digitado e alterando de string para numero flutuante (aceita decimais)
    let numero2 = parseFloat (document.getElementById('number2').value) ;  

    if(numero1 > numero2) {
        mensagemresultado.innerHTML = "Infelizmente voce errou!<br>O número: " + numero1 + " é maior que o número: " + numero2;
    }
    else if(numero2 > numero1) {
        mensagemresultado.innerHTML = "Parabéns voce acertou!<br>O número: " + numero2 + " é maior que o número: " + numero1;
    }
    else {
        mensagemresultado.innerHTML = "Infelizmente voce errou!<br>Os números inseridos são iguais!";
    }

})

document.getElementById('btn-limpar').addEventListener('click', function(){
    let resultados = document.getElementsByClassName('resultado');
    for (let i = 0; i < resultados.length; i++) {
    resultados[i].textContent = '';
    }
})