"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sheep = /** @class */ (function () {
    function Sheep(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Sheep.prototype.clone = function () {
        return new Sheep(this.name, this.weight);
    };
    return Sheep;
}());
exports.default = Sheep;
