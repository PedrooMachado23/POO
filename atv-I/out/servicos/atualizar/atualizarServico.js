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
var listagemServico_1 = __importDefault(require("../listar/listagemServico"));
var atualizar_1 = __importDefault(require("./atualizar"));
var AtualizarServico = /** @class */ (function (_super) {
    __extends(AtualizarServico, _super);
    function AtualizarServico(clientes, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.listagem = new listagemServico_1.default(clientes, servicos);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizarServico.prototype.atualizar = function () {
        var execucao = true;
        var _loop_1 = function () {
            this_1.listagem.listar();
            var nome = this_1.entrada.receberTexto('Digite o nome do servico para editar ou "sair" para sair: ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            var servico = this_1.servicos.find(function (servico) { return servico.nome === nome; });
            if (servico) {
                var opcao = this_1.entrada.receberTexto('Dado a atualizar (nome, valor): ');
                switch (opcao) {
                    case 'nome':
                        servico.nome = this_1.entrada.receberTexto('Novo nome: ');
                    case 'valor':
                        servico.setValor = this_1.entrada.receberNumero('Novo valor: ');
                }
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
    return AtualizarServico;
}(atualizar_1.default));
exports.default = AtualizarServico;
