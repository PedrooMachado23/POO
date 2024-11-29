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
var listagemCliente_1 = __importDefault(require("../listar/listagemCliente"));
var deletar_1 = __importDefault(require("./deletar"));
var DeletarCompra = /** @class */ (function (_super) {
    __extends(DeletarCompra, _super);
    function DeletarCompra(clientes) {
        var _this = _super.call(this) || this;
        _this.listaProdutos = [];
        _this.listaServicos = [];
        _this.clientes = clientes;
        _this.listagemClientes = new listagemCliente_1.default(clientes);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarCompra.prototype.deletar = function () {
        var _this = this;
        var execucao = true;
        var _loop_1 = function () {
            this_1.listagemClientes.listar();
            var nome = this_1.entrada.receberTexto('Digite o nome do cliente que deseja retirar a compra ou "sair" para cancelar: ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            var cliente = this_1.clientes.find(function (cliente) { return cliente.nome === nome; });
            if (cliente) {
                this_1.listaProdutos = cliente.getProdutosConsumidos;
                this_1.listaServicos = cliente.getServicosConsumidos;
            }
            console.log("Produtos comprados");
            console.log('------------');
            this_1.listaProdutos.forEach(function (produto, index) {
                console.log("".concat(index + 1, " - ").concat(produto.getNome, " ").concat(produto.getValor));
            });
            console.log('0 - cancelar\n');
            var produtos = this_1.entrada.receberTexto('Digite o número dos produtos que queria remover: ').split(', ');
            if (produtos[0] == '0') { }
            else {
                produtos.forEach(function (text) {
                    var index = parseInt(text) - 1; // Converte para número e ajusta para 0
                    if (index >= 0 && index < _this.listaProdutos.length) { // Verifica se o índice é válido
                        _this.listaProdutos.splice(index, 1);
                    }
                    else {
                        console.log("\u00CDndice inv\u00E1lido: ".concat(text));
                    }
                });
            }
            console.log("Servicos adquiridos");
            console.log('------------');
            this_1.listaServicos.forEach(function (servico, index) {
                console.log("".concat(index + 1, " - ").concat(servico.nome, " ").concat(servico.getValor));
            });
            console.log('0 - cancelar\n');
            var servicos = this_1.entrada.receberTexto('Digite o número dos servicos que queria remover: ').split(', ');
            if (servicos[0] == '0') { }
            else {
                servicos.forEach(function (text) {
                    var index = parseInt(text) - 1; // Converte para número e ajusta para 0
                    if (index >= 0 && index < _this.listaServicos.length) { // Verifica se o índice é válido
                        _this.listaServicos.splice(index, 1);
                    }
                    else {
                        console.log("\u00CDndice inv\u00E1lido: ".concat(text));
                    }
                });
            }
        };
        var this_1 = this;
        while (execucao) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
    };
    return DeletarCompra;
}(deletar_1.default));
exports.default = DeletarCompra;
