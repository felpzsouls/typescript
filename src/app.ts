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

// => number

let num1: number = 23; //inteiro
let num2: number = 0x78FC; //hexadecimal
let num3: number = 0o577; //octal
let num4: number = 0b1101; //binario

//  bigint 
let big1: bigint = 2934857902347590347590n;
let big2: bigint = 0b10000000000000000000000000001n;
let big3: bigint = 0x2000000000003n;
let big4: bigint = 0o4000000000003n;

// strings
// aspas simples

let nomecompleto: string = 'Luis Felipe'

// aspas duplas

let funcaoEmpresa: string = "Operador de telemarketing"

// aspa crazeada

let nomeEmpresa: string =  `NEOBPO`,
    dadosFuncionario: string = `Seja bem vindo ${nomecompleto} voce sera ${funcaoEmpresa}  na empresa ${nomeEmpresa}`

// Arrays

let frutas: string[] = ['abacaxi', 'maca', 'laranja', 'melancia', 'manga']
console.log(frutas[0])

let frutas1: Array<string> = ['abacaxi', 'maca', 'laranja', 'melancia', 'manga']
console.log(frutas1[1])


let idiomas: Array<string> = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas);

idiomas.push('mandarim');
console.log(idiomas)

let idiomas1: Array<string> = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas1.length)

let num = [0, 1, 2, 3, 4, 5];
num = [...num, 6, 7, 8, 9, 10]

console.log(num)

let linguagens: string[] = new Array('javascript', 'html', 'css', 'typescript');
function funcaoLinguagens(Linguagens: string[]) {
    for (let i = 0; i < Linguagens.length; i++) {
        console.log(linguagens[i])
    }
}

funcaoLinguagens(linguagens)
//consoles
console.log(dadosFuncionario)
console.log(nomecompleto)
console.log(funcaoEmpresa)

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
console.log(typeof(num2));
console.log('number - octal:', num3);
console.log(typeof(num3));
console.log('number - binario:', num4);
console.log(typeof(num4));

console.log('number - ponto flutuante:', big1);
console.log('number - hexadecimal:', big2);
console.log(typeof(big2));
console.log('number - octal:', big3);
console.log(typeof(big3));
console.log('number - binario:', big4);
console.log(typeof(big4));