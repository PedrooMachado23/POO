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
var entrada_1 = __importDefault(require("../io/entrada"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var atualizar_1 = __importDefault(require("./atualizar"));
var listagemCliente_1 = __importDefault(require("./listagemCliente"));
var AtualizarCliente = /** @class */ (function (_super) {
    __extends(AtualizarCliente, _super);
    function AtualizarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        _this.lista = new listagemCliente_1.default(clientes);
        return _this;
    }
    AtualizarCliente.prototype.atualizar = function () {
        this.lista.listar();
        var nomeBuscado = this.entrada.receberTexto('Digite o nome do cliente que queira editar: ');
        var clienteRequisitado = this.clientes.find(function (cliente) { return cliente.nome === nomeBuscado; });
        if (clienteRequisitado) {
            var opcao = this.entrada.receberTexto('Dado a atualizar (nome, nome social, cpf');
            switch (opcao.toLowerCase()) {
                case 'nome':
                    clienteRequisitado.nome = this.entrada.receberTexto('Novo nome: ');
                case 'nome social':
                    clienteRequisitado.nome = this.entrada.receberTexto('Novo nome social: ');
                case 'cpf':
                    var valorCpf = this.entrada.receberTexto('Novo número CPF: ');
                    var emissaoCpf = this.entrada.receberTexto('Nova data de emissão: ');
                    var cpf = new cpf_1.default(valorCpf, emissaoCpf);
                    clienteRequisitado.setCpf = cpf;
            }
        }
        else {
            console.log('Cliente não encontrado');
        }
    };
    return AtualizarCliente;
}(atualizar_1.default));
exports.default = AtualizarCliente;
