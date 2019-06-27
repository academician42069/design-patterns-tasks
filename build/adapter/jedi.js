"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jedi = /** @class */ (function () {
    function Jedi(level) {
        this.level = level;
    }
    Jedi.prototype.attackWithSaber = function () {
        return this.level * 100;
    };
    return Jedi;
}());
exports.Jedi = Jedi;
