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
// => number
let num1 = 23; //inteiro
let num2 = 0x78FC; //hexadecimal
let num3 = 0o577; //octal
let num4 = 0b1101; //binario
//  bigint 
let big1 = 2934857902347590347590n;
let big2 = 268435457n;
let big3 = 0x2000000000003n;
let big4 = 274877906947n;
// strings
// aspas simples
let nomecompleto = 'Luis Felipe';
// aspas duplas
let funcaoEmpresa = "Operador de telemarketing";
// aspa crazeada
let nomeEmpresa = `NEOBPO`, dadosFuncionario = `Seja bem vindo ${nomecompleto} voce sera ${funcaoEmpresa}  na empresa ${nomeEmpresa}`;
// Arrays
let frutas = ['abacaxi', 'maca', 'laranja', 'melancia', 'manga'];
console.log(frutas[0]);
let frutas1 = ['abacaxi', 'maca', 'laranja', 'melancia', 'manga'];
console.log(frutas1[1]);
let idiomas = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas);
idiomas.push('mandarim');
console.log(idiomas);
let idiomas1 = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas1.length);
let num = [0, 1, 2, 3, 4, 5];
num = [...num, 6, 7, 8, 9, 10];
console.log(num);
let linguagens = new Array('javascript', 'html', 'css', 'typescript');
function funcaoLinguagens(Linguagens) {
    for (let i = 0; i < Linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagens);
//consoles
console.log(dadosFuncionario);
console.log(nomecompleto);
console.log(funcaoEmpresa);
console.log(numbers(1, 5));
console.log(message);
console.log(mult(2, 5));
console.log(carro);
console.log(animais);
console.log(nome);
console.log(calc(1, 3));
console.log(tarefaConcluida);
console.log(tarefaPendente);
console.log('number - ponto flutuante:', num1);
console.log('number - hexadecimal:', num2);
console.log(typeof (num2));
console.log('number - octal:', num3);
console.log(typeof (num3));
console.log('number - binario:', num4);
console.log(typeof (num4));
console.log('number - ponto flutuante:', big1);
console.log('number - hexadecimal:', big2);
console.log(typeof (big2));
console.log('number - octal:', big3);
console.log(typeof (big3));
console.log('number - binario:', big4);
console.log(typeof (big4));
