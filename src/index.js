"use strict";
// Automata forditas:
// npx tsc --watch
// npx webpack watch
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
function negyzet(szam) {
    return szam * szam;
}
let message = 'Hello world';
console.log(message);
let ures;
if (message.startsWith('H')) {
    console.log('H-val kezdodik');
    ures = 1;
}
else {
    ures = 2;
}
let ertek = 5;
// Kitalalja magatol
// ertek = "asdf";
// let s : string = negyzet(3);
let user = new User_1.User('nev', 44);
user.kiir();
let users = [];
users.push(new User_1.User("masikuser", 10));
users.push(user);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames = ['str1', 'user2'];
let userHalmaz = new Set();
let nevUser = new Map();
let nevUser2 = new Map();
nevUser2.set("usernev", new User_1.User("usernev", 33));
// nevUser2.set(2, new Error("kivetel"));
// nevUser2.get("usernev").kiir();
function osszeg(t) {
}
console.log(osszeg([1, 45456, -45.6]));
console.log(osszeg(['a', 'b', 'c']));
//console.log(osszeg([ new User("a", 1) ]));
//console.log(osszeg([ 1, 'asdf' ]));
function IDKiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
IDKiir(12);
IDKiir("asdff4235");
let elem = document.getElementById('asdf');
if (elem !== null) {
    console.log(elem.textContent);
}
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
function szamol() {
    let szam = parseInt(document.getElementById('szam').value);
    document.getElementById('kimenet').textContent = negyzet(szam).toString();
}
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
document.addEventListener('DOMContentLoaded', init);
