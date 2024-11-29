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
var deletar_1 = __importDefault(require("./deletar"));
var DeletarServico = /** @class */ (function (_super) {
    __extends(DeletarServico, _super);
    function DeletarServico(clientes, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.listagem = new listagemServico_1.default(clientes, servicos);
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarServico.prototype.deletar = function () {
        this.listagem.listar();
        var execucao = true;
        var _loop_1 = function () {
            var nome = this_1.entrada.receberTexto('Digite o nome do servico para apagar ou "sair" para sair: ');
            if (nome == 'sair') {
                execucao = false;
                return "break";
            }
            var servicoIndex = this_1.servicos.findIndex(function (servico) { return servico.nome === nome; });
            if (servicoIndex !== -1) {
                this_1.servicos.splice(servicoIndex, 1);
                console.log("Servico ".concat(nome, " apagado"));
            }
        };
        var this_1 = this;
        while (execucao) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
    };
    return DeletarServico;
}(deletar_1.default));
exports.default = DeletarServico;
