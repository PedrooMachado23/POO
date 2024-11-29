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
var ListagemCliente = /** @class */ (function (_super) {
    __extends(ListagemCliente, _super);
    function ListagemCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.listaProdutos = [];
        _this.clientes = clientes;
        return _this;
    }
    ListagemCliente.prototype.listar = function () {
        console.log('Clientes existentes');
        this.clientes.forEach(function (cliente) {
            console.log('Nome: ', cliente.nome);
            console.log('Nome Social:', cliente.nomeSocial);
            console.log('CPF: ', cliente.getCpf);
            console.log('Compras: ', cliente.getProdutosConsumidos);
            console.log('Servicos: ', cliente.getServicosConsumidos);
            console.log('------\n');
        });
    };
    ListagemCliente.prototype.listarMaisCompras = function (sort) {
        console.log('10 clientes que mais compraram');
        var clientesOrdenados = this.clientes.slice().sort(function (cliente1, cliente2) {
            var total1 = cliente1.getProdutosConsumidos.length + cliente1.getServicosConsumidos.length;
            var total2 = cliente2.getProdutosConsumidos.length + cliente2.getServicosConsumidos.length;
            if (sort == 'mais') {
                return total2 - total1;
            }
            else if (sort == 'menos') {
                return total1 - total2;
            }
            return 0;
        });
        for (var i = 0; i < 10; i++) {
            var cliente = clientesOrdenados[i];
            var produtos = cliente.getProdutosConsumidos.map(function (produto) { return produto.nome; }).join(', ');
            var servicos = cliente.getServicosConsumidos.map(function (servico) { return servico.nome; }).join(', ');
            console.log("".concat(i + 1, " - ").concat(cliente.nome, " => Produtos: [").concat(produtos, "] Servi\u00E7os: [").concat(servicos, "]"));
        }
        console.log('');
    };
    ListagemCliente.prototype.listarMaisGasto = function () {
        console.log('5 clientes que mais gastaram');
        var clientesOrdenados = this.clientes.slice().sort(function (cliente1, cliente2) {
            var total1 = 0;
            cliente1.getProdutosConsumidos.forEach(function (produto) {
                total1 += produto.getValor;
            });
            cliente1.getServicosConsumidos.forEach(function (servico) {
                total1 += servico.getValor;
            });
            var total2 = 0;
            cliente2.getProdutosConsumidos.forEach(function (produto) {
                total2 += produto.getValor;
            });
            cliente2.getServicosConsumidos.forEach(function (servico) {
                total2 += servico.getValor;
            });
            return total2 - total1;
        });
        var _loop_1 = function (i) {
            var cliente = clientesOrdenados[i];
            var gastoProd = 0;
            cliente.getProdutosConsumidos.forEach(function (produto) {
                gastoProd += produto.getValor;
            });
            var gastoServ = 0;
            cliente.getServicosConsumidos.forEach(function (servico) {
                gastoServ += servico.getValor;
            });
            console.log("".concat(i + 1, " - ").concat(cliente.nome, " => Gasto com produtos: R$").concat(gastoProd, " Gasto com servicos: R$").concat(gastoServ, ". Total =  R$").concat(gastoProd + gastoServ));
        };
        for (var i = 0; i < 5; i++) {
            _loop_1(i);
        }
        console.log('');
    };
    ListagemCliente.prototype.listarGenero = function () {
        console.log('Clientes com base no gênero\n');
        console.log('Gênero Masculino');
        this.clientes.forEach(function (cliente) {
            if (cliente.genero.toLowerCase() == 'masculino') {
                console.log("".concat(cliente.nome));
            }
        });
        console.log('\n');
        console.log('Gênero Feminino\n');
        this.clientes.forEach(function (cliente) {
            if (cliente.genero.toLowerCase() == 'feminino') {
                console.log("".concat(cliente.nome));
            }
        });
        console.log('\n');
    };
    return ListagemCliente;
}(listagem_1.default));
exports.default = ListagemCliente;
