"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
function bestof() {
    let ss = 0;
    let rat = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].getRating > rat) {
            ss = i;
            rat = lista[i].getRating;
        }
    }
}
let lista = [];
var rnd;
for (let i = 0; i < 30; i++) {
    rnd = Math.floor(Math.random() * 10 + 1);
    let cim = "Book#" + i;
    lista.push(new Book_1.Book(cim, rnd));
}
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
for (let i = 0; i < lista.length; i++) {
    if (lista[i].getRating > 7) {
        console.log(lista[i]);
    }
}
bestof();
