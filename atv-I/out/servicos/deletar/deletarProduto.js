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
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagemProduto_1 = __importDefault(require("../listar/listagemProduto"));
var deletar_1 = __importDefault(require("./deletar"));
var DeletarProduto = /** @class */ (function (_super) {
    __extends(DeletarProduto, _super);
    function DeletarProduto(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.listagem = new listagemProduto_1.default(clientes, produtos);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarProduto.prototype.deletar = function () {
        var execucao = true;
        var _loop_1 = function () {
            this_1.listagem.listar();
            var nome = this_1.entrada.receberTexto('Digite o nome do produto para excluir ou "sair" para sair: ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            var produtoIndex = this_1.produtos.findIndex(function (produto) { return produto.nome === nome; });
            if (produtoIndex !== -1) {
                this_1.produtos.splice(produtoIndex, 1);
                console.log("Cliente ".concat(nome, " apagado!"));
            }
            else {
                console.log('Cliente não encontrado');
            }
        };
        var this_1 = this;
        while (execucao) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
    };
    return DeletarProduto;
}(deletar_1.default));
exports.default = DeletarProduto;
