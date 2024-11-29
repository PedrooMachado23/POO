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
var ListagemProduto = /** @class */ (function (_super) {
    __extends(ListagemProduto, _super);
    function ListagemProduto(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        return _this;
    }
    ListagemProduto.prototype.listar = function () {
        console.log('Produtos existentes');
        this.produtos.forEach(function (produto) {
            console.log("Nome: ".concat(produto.nome));
            console.log("Valor: R$".concat(produto.getValor));
            console.log('------\n');
        });
    };
    ListagemProduto.prototype.listarGenero = function () {
        var consumosMasc = {};
        var consumosFem = {};
        this.clientes.forEach(function (cliente) {
            var produtos = cliente.getProdutosConsumidos;
            var genero = cliente.genero;
            produtos.forEach(function (produto) {
                var nomeProduto = produto.nome;
                var alvo = consumosMasc;
                if (genero.toLowerCase() == 'feminino') {
                    alvo = consumosFem;
                }
                if (!alvo[nomeProduto]) {
                    alvo[nomeProduto] = 1;
                }
                else {
                    alvo[nomeProduto]++;
                }
            });
        });
        var ordenadoMasc = Object.fromEntries(Object.entries(consumosMasc).sort(function (a, b) { return b[1] - a[1]; }));
        var produtosMasc = Object.entries(ordenadoMasc);
        var ordenadoFem = Object.fromEntries(Object.entries(consumosFem).sort(function (a, b) { return b[1] - a[1]; }));
        var produtosFem = Object.entries(ordenadoFem);
        console.log('\nProdutos mais consumidos pelo público Masculino:');
        console.log('------------');
        produtosMasc.forEach(function (produto, index) {
            console.log("".concat(index + 1, " - ").concat(produto[0], ", quantidade: ").concat(produto[1]));
        });
        console.log('');
        console.log('Produtos mais consumidos pelo público Feminino:');
        console.log('------------');
        produtosFem.forEach(function (produto, index) {
            console.log("".concat(index + 1, " - ").concat(produto[0], ", quantidade: ").concat(produto[1]));
        });
        console.log('');
    };
    return ListagemProduto;
}(listagem_1.default));
exports.default = ListagemProduto;
