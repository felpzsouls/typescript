"use strict";
let user;
user = {
    username: "Felpzsouls",
    email: "felpzsouls@gmail.com",
    password: "felpzsouls",
    idade: 18,
    loggin: false
};
console.log(`Seja bem vindo ${user.username}`);
if (user.email === "felpzsouls@gmail.com") {
    if (user.email && user.password === "felpzsouls") {
        user.loggin = true;
        console.log('Usuario logado');
    }
    else {
        console.log('senha invalida');
    }
    ;
}
else {
    console.log('email nao encontrado');
}
;
if (user.loggin) {
    if (user.idade < 18) {
        console.log('menor de idade');
    }
    else {
        console.log('maior de idade');
    }
    ;
}
else {
    console.log('faca loggin antes');
}
;
