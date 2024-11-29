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
var listagemServico_1 = __importDefault(require("../listar/listagemServico"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastrarCompra = /** @class */ (function (_super) {
    __extends(CadastrarCompra, _super);
    function CadastrarCompra(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.listagemCliente = new listagemCliente_1.default(clientes);
        _this.listagemProduto = new listagemProduto_1.default(clientes, produtos);
        _this.listagemServico = new listagemServico_1.default(clientes, servicos);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastrarCompra.prototype.cadastrar = function () {
        var _this = this;
        var execucao = true;
        var _loop_1 = function () {
            this_1.listagemCliente.listar();
            var nome = this_1.entrada.receberTexto('Digite o nome do cliente que fez a compra ou "sair" para cancelar: ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            this_1.listagemProduto.listar();
            var carrinhoProduto = this_1.entrada.receberTexto('Digite o(s) nome(s) do(s) produtos(s) que o cliente comprou: ').split(', ');
            var cliente = this_1.clientes.find(function (cliente) { return cliente.nome === nome; });
            var historicoProduto = [];
            if (cliente) {
                historicoProduto = cliente.getProdutosConsumidos;
            }
            else {
                console.log("Cliente ".concat(nome, " n\u00E3o encontrado"));
                return "continue";
            }
            carrinhoProduto.forEach(function (nomeProduto) {
                var produto = _this.produtos.find(function (produto) { return produto.nome === nomeProduto; });
                if (produto) {
                    historicoProduto.push(produto);
                    console.log("Produto ".concat(nomeProduto, " comprado!"));
                }
                else {
                    console.log("Produto ".concat(nomeProduto, " n\u00E3o encontrado"));
                }
            });
            this_1.listagemServico.listar();
            var carrinhoServico = this_1.entrada.receberTexto('Digite o(s) nome(s) do(s) servico(s) que o cliente comprou: ').split(', ');
            var historicoServico = cliente.getServicosConsumidos;
            carrinhoServico.forEach(function (nomeServico) {
                var servico = _this.servicos.find(function (servico) { return servico.nome === nomeServico; });
                if (servico) {
                    historicoServico.push(servico);
                    console.log("Servico ".concat(nomeServico, " comprado!"));
                }
                else {
                    console.log("Servico ".concat(nomeServico, " n\u00E3o encontrado"));
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
    CadastrarCompra.prototype.inserir = function () {
        var _this = this;
        this.clientes.forEach(function (cliente) {
            var quantidadeCompras = Math.floor(Math.random() * 10) + 1;
            for (var i = 0; i < quantidadeCompras; i++) {
                var produtoAleatorio = _this.produtos[Math.floor(Math.random() * _this.produtos.length)];
                var historicoCompra = cliente.getProdutosConsumidos;
                historicoCompra.push(produtoAleatorio);
            }
            for (var i = 0; i < quantidadeCompras; i++) {
                var servicoAleatorio = _this.servicos[Math.floor(Math.random() * _this.servicos.length)];
                var historicoServico = cliente.getServicosConsumidos;
                historicoServico.push(servicoAleatorio);
            }
        });
    };
    return CadastrarCompra;
}(cadastro_1.default));
exports.default = CadastrarCompra;
