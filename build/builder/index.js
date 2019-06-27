"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this.request = new request_1.Request();
    }
    RequestBuilder.prototype.forUrl = function (url) {
        this.request.url = url;
        return this;
    };
    RequestBuilder.prototype.useMethod = function (method) {
        this.request.method = method;
        return this;
    };
    RequestBuilder.prototype.payload = function (payload) {
        this.request.payload = payload;
        return this;
    };
    RequestBuilder.prototype.build = function () {
        return this.request;
    };
    return RequestBuilder;
}());
exports.default = RequestBuilder;
