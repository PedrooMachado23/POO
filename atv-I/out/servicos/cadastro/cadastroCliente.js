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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log('Insira as informações para cadastrar seu cliente');
        var nome = this.entrada.receberTexto('Nome: ');
        var nomeSocial = this.entrada.receberTexto('Nome Social: ');
        var genero = this.entrada.receberTexto('Gênero: ');
        var valorCpf = this.entrada.receberTexto('Número de CPF: ');
        var emissaoCpf = this.entrada.receberTexto('Data de Emissão (dd/mm/yyyy): ');
        var cpf = new cpf_1.default(valorCpf, emissaoCpf);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log('\nCadastro concluído\n');
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
