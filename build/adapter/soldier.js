"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Soldier = /** @class */ (function () {
    function Soldier(level) {
        this.level = level;
    }
    Soldier.prototype.attack = function () {
        return this.level * 1;
    };
    return Soldier;
}());
exports.Soldier = Soldier;
