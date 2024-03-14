let user: {
    username: string;
    email: string;
    password: string;
    idade: number;
    loggin: boolean;
}

user = {
    username: "Felpzsouls",
    email: "felipedark2509@gmail.com",
    password: "felipe2345",
    idade: 18,
    loggin: false
}

console.log(`Seja bem vindo ${user.username}`);
if(user.email === "felipedark2509@gmail.com") {
    if(user.email && user.password === "felipe2345") {
        user.loggin = true;
        console.log('Usuario logado')
    } else {
        console.log('senha invalida')
    }
} else {
    console.log('email nao encontrado')
}

if(user.loggin) {
    if(user.idade < 18) {
        console.log('menor de idade')
    } else {
        console.log('maior de idade')
    }
} else {
    console.log('faca loggin antes')
}