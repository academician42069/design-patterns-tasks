"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b1_1 = require("./b1");
var rx24_1 = require("./rx24");
function droidProducer(kind) {
    if (kind === "battle") {
        return battleDroidFactory;
    }
    return pilotDroidFactory;
}
function battleDroidFactory() {
    return new b1_1.B1();
}
function pilotDroidFactory() {
    return new rx24_1.Rx24();
}
exports.default = droidProducer;
