alert('Boas vindas ao jogo do numero secreto');

let valorMax = 5000;
let numeroSecreto = parseInt(Math.random() * valorMax + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${valorMax}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);