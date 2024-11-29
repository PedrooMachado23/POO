"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    function CPF(valor, data) {
        this.valor = valor;
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        this.dataEmissao = new Date(ano, mes, dia);
    }
    Object.defineProperty(CPF.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPF.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    return CPF;
}());
exports.default = CPF;
