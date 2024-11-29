"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    Object.defineProperty(Servico.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setValor", {
        set: function (valor) {
            this.valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
