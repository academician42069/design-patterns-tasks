"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jedi_1 = require("./jedi");
exports.Jedi = jedi_1.Jedi;
var soldier_1 = require("./soldier");
exports.Soldier = soldier_1.Soldier;
var JediAdapter = /** @class */ (function () {
    function JediAdapter(jedi) {
        this.jedi = jedi;
    }
    JediAdapter.prototype.attack = function () {
        return this.jedi.attackWithSaber();
    };
    return JediAdapter;
}());
exports.JediAdapter = JediAdapter;
