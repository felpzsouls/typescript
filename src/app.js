"use strict";
let message = 'Salve Mundo';
let number = 8;
let vdd = true;
function numbers(num1, num2) {
    return num1 + num2;
}
;
// => Variaveis
let nome = "Felpz";
// => Arrays
let animais = ["cachorro", "gato", "coelho", 'macaco'];
// => objetos
let carro;
carro = {
    nome: 'toyota',
    ano: 2019,
    preco: 80000
};
// => funcoes
function mult(num1, num2) {
    return num1 * num2;
}
;
// => boolean
function calc(num1, num2) {
    let yep;
    let math = num1 + num2;
    if (math == 5) {
        return yep = true;
    }
    else {
        return yep = false;
    }
    ;
}
;
let tarefaConcluida = true;
let tarefaPendente = false;
let concluido = false;
if (concluido) {
    console.log('tarefa concluida');
}
else {
    console.log('tarefa pendente');
}
;
//consoles
console.log(numbers(1, 5));
console.log(message);
console.log(mult(2, 5));
console.log(carro);
console.log(animais);
console.log(nome);
console.log(calc(1, 3));
console.log(tarefaConcluida);
console.log(tarefaPendente);
