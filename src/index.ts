import { Book } from "./Book";
function bestof(){
    let ss :number = 0;
    let rat :number = 0;
    for (let i :number = 0; i < lista.length; i++){
        if (lista[i].getRating > rat){
            ss = i;
            rat = lista[i].getRating;
        }
    }
}
let lista: Array<Book> = [];
var rnd; 
for(let i:number = 0; i < 30; i++) {
    rnd = Math.floor(Math.random() * 10 + 1);
    let cim :string = "Book#"+i;
    lista.push(new Book (cim,rnd));
}
for(let i:number = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
for(let i:number = 0; i < lista.length; i++) {
    if(lista[i].getRating > 7){
        console.log(lista[i]);
    }
}
bestof();