let message: string = 'Salve Mundo';
let number: number = 8;
let vdd: boolean = true;

function numbers(num1: number, num2: number) {
    return num1 + num2
};

// => Variaveis

let nome: string = "Felpz";

// => Arrays
let animais: string[] = ["cachorro", "gato", "coelho", 'macaco'];

// => objetos

let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = {
    nome: 'toyota',
    ano: 2019,
    preco: 80000
};

// => funcoes

function mult(num1: number, num2: number) {
    return num1 * num2
};

// => boolean

function calc(num1: number, num2: number) {
    let yep: boolean;
    let math: number = num1 + num2;

    if (math == 5) {
        return yep = true
    } else {
        return yep = false
    };
};

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

let concluido: boolean = false;

if (concluido) {
    console.log('tarefa concluida')
} else {
    console.log('tarefa pendente')
};

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