"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmw_1 = require("./bmw");
var BmwFactory = /** @class */ (function () {
    function BmwFactory() {
    }
    BmwFactory.create = function (type) {
        if (type === "X5") {
            return new bmw_1.Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new bmw_1.Bmw(type, 111000, 320);
        }
    };
    return BmwFactory;
}());
exports.default = BmwFactory;
