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
var listagemProduto_1 = __importDefault(require("../listar/listagemProduto"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastrarConsumo = /** @class */ (function (_super) {
    __extends(CadastrarConsumo, _super);
    function CadastrarConsumo(clientes, produtos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.listagemCliente = new listagemCliente_1.default(clientes);
        _this.listagemProduto = new listagemProduto_1.default(produtos);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarConsumo.prototype.cadastrar = function () {
        var _this = this;
        var execucao = true;
        var _loop_1 = function () {
            this_1.listagemCliente.listar();
            var nome = this_1.entrada.receberTexto('Digite o nome do cliente que fez a compra ou "sair" para cancelar: ');
            this_1.listagemProduto.listar();
            var carrinho = this_1.entrada.receberTexto('Digite o(s) nome(s) do(s) produtos(s) que o cliente comprou: ').split(', ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            var cliente = this_1.clientes.find(function (cliente) { return cliente.nome === nome; });
            var historicoCompra = [];
            if (cliente) {
                historicoCompra = cliente.getProdutosConsumidos;
            }
            else {
                console.log("Cliente ".concat(nome, " n\u00E3o encontrado"));
                return "continue";
            }
            carrinho.forEach(function (nomeProduto) {
                var produto = _this.produtos.find(function (produto) { return produto.nome === nomeProduto; });
                if (produto) {
                    historicoCompra.push(produto);
                    console.log("Produto ".concat(nome, " comprado!"));
                }
                else {
                    console.log("Produto ".concat(nomeProduto, " n\u00E3o encontrado"));
                }
            });
        };
        var this_1 = this;
        while (execucao) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
    };
    return CadastrarConsumo;
}(cadastro_1.default));
exports.default = CadastrarConsumo;
