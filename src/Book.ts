export class User {
    #name :string;
    #rating :number;

    constructor(name :string, rating :number) {
        this.#name = name;
        this.#rating = rating;
    }
    kiir() : void {
        console.log(this.#name, this.#rating);
    }
}