// Automata forditas:
// npx tsc --watch
// npx webpack watch

import { User } from "./User";

function negyzet(szam : number) : number {
    return szam * szam;
}

let message : string = 'Hello world';
console.log(message);
let ures : number;
if (message.startsWith('H')) {
    console.log('H-val kezdodik');
    ures = 1;
} else {
    ures = 2;
}
let ertek = 5;
// Kitalalja magatol
// ertek = "asdf";

// let s : string = negyzet(3);

let user = new User('nev', 44);
user.kiir();


let users : User[] = [];
users.push(new User("masikuser", 10));
users.push(user);
console.log(users);
let u = users[1];
for (let e of users) {
    e.kiir();
}
let usernames : Array<string> = [ 'str1', 'user2' ];
let userHalmaz : Set<User> = new Set();

let nevUser : Map<string, User> = new Map();
let nevUser2 = new Map<string, User>();

nevUser2.set("usernev", new User("usernev", 33));
// nevUser2.set(2, new Error("kivetel"));
// nevUser2.get("usernev").kiir();

function osszeg(t : number[] | string[]) {
}
console.log(osszeg([ 1, 45456, -45.6 ]));
console.log(osszeg([ 'a', 'b', 'c' ]));
//console.log(osszeg([ new User("a", 1) ]));
//console.log(osszeg([ 1, 'asdf' ]));


function IDKiir(id: string | number) {
    if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id.toUpperCase());
    }
}

IDKiir(12);
IDKiir("asdff4235");

let elem = document.getElementById('asdf');
if (elem !== null) {
    console.log(elem.textContent);
}
console.log(elem?.textContent);

function szamol() {
    let szam = parseInt((document.getElementById('szam') as HTMLInputElement).value);
    (document.getElementById('kimenet') as HTMLElement).textContent = negyzet(szam).toString();
}

function init() {
    document.getElementById('szam')?.addEventListener('input', szamol);
}

document.addEventListener('DOMContentLoaded', init);

