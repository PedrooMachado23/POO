"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.dataCadastro = new Date();
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setCpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setDataCadastro", {
        set: function (dataCadastro) {
            this.dataCadastro = dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setProdutosConsumidos", {
        set: function (produtosConsumidos) {
            this.produtosConsumidos = produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setServicosConsumidos", {
        set: function (servicosConsumidos) {
            this.servicosConsumidos = servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
