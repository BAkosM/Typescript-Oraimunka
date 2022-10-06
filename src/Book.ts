export class Book {
    #name :string;
    #rating :number;

    constructor(name :string, rating :number) {
        this.#name = name;
        this.#rating = rating;
    }
    public Book(name :string, rating :number) {
        this.#name = name;
        this.#rating = rating;
    }
    public set setName(name :string) {
        this.#name = name;
    }
    public get getRating() {
        return this.#rating;
    }
    public set setRating(rating :number) {
        if (rating > 10 || rating < 1){
            throw new Error("Inavalid Number!");
        }else{
            this.#rating = rating;
        }
    }
    public toString() :string {
        return "Könyv címe: "+this.#name+" Értékelése: "+this.#rating;
    }
} 