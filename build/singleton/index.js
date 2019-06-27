"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        if (Person.instance) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
    return Person;
}());
exports.default = Person;
