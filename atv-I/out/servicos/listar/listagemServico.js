"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("./listagem"));
var ListagemServico = /** @class */ (function (_super) {
    __extends(ListagemServico, _super);
    function ListagemServico(clientes, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        return _this;
    }
    ListagemServico.prototype.listar = function () {
        console.log('Serivcos existentes');
        console.log('------------');
        this.servicos.forEach(function (servico) {
            console.log("Nome: ".concat(servico.nome));
            console.log("Valor: R$".concat(servico.getValor));
            console.log('------\n');
        });
    };
    ListagemServico.prototype.listarGenero = function () {
        var consumosMasc = {};
        var consumosFem = {};
        this.clientes.forEach(function (cliente) {
            var servicos = cliente.getServicosConsumidos;
            var genero = cliente.genero;
            servicos.forEach(function (servico) {
                var nomeServico = servico.nome;
                var alvo = consumosMasc;
                if (genero.toLowerCase() == 'feminino') {
                    alvo = consumosFem;
                }
                if (!alvo[nomeServico]) {
                    alvo[nomeServico] = 1;
                }
                else {
                    alvo[nomeServico]++;
                }
            });
        });
        var ordenadoMasc = Object.fromEntries(Object.entries(consumosMasc).sort(function (a, b) { return b[1] - a[1]; }));
        var produtosMasc = Object.entries(ordenadoMasc);
        var ordenadoFem = Object.fromEntries(Object.entries(consumosFem).sort(function (a, b) { return b[1] - a[1]; }));
        var produtosFem = Object.entries(ordenadoFem);
        console.log('\nServicos mais consumidos pelo público Masculino:');
        console.log('------------');
        produtosMasc.forEach(function (servico, index) {
            console.log("".concat(index + 1, " - ").concat(servico[0], ", quantidade: ").concat(servico[1]));
        });
        console.log('');
        console.log('Servicos mais consumidos pelo público Feminino:');
        console.log('------------');
        produtosFem.forEach(function (servico, index) {
            console.log("".concat(index + 1, " - ").concat(servico[0], ", quantidade: ").concat(servico[1]));
        });
        console.log('');
    };
    return ListagemServico;
}(listagem_1.default));
exports.default = ListagemServico;
