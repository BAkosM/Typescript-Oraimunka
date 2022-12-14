"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_name, _Book_rating;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        _Book_name.set(this, void 0);
        _Book_rating.set(this, void 0);
        __classPrivateFieldSet(this, _Book_name, name, "f");
        __classPrivateFieldSet(this, _Book_rating, rating, "f");
    }
    Book(name, rating) {
        __classPrivateFieldSet(this, _Book_name, name, "f");
        __classPrivateFieldSet(this, _Book_rating, rating, "f");
    }
    set setName(name) {
        __classPrivateFieldSet(this, _Book_name, name, "f");
    }
    get getRating() {
        return __classPrivateFieldGet(this, _Book_rating, "f");
    }
    set setRating(rating) {
        if (rating > 10 || rating < 1) {
            throw new Error("Inavalid Number!");
        }
        else {
            __classPrivateFieldSet(this, _Book_rating, rating, "f");
        }
    }
    toString() {
        return "K??nyv c??me: " + __classPrivateFieldGet(this, _Book_name, "f") + " ??rt??kel??se: " + __classPrivateFieldGet(this, _Book_rating, "f");
    }
}
exports.Book = Book;
_Book_name = new WeakMap(), _Book_rating = new WeakMap();
