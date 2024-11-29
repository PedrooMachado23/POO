"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = __importDefault(require("../modelo/produto"));
var InserirProdutos = /** @class */ (function () {
    function InserirProdutos(produtos) {
        this.produtos = produtos;
    }
    InserirProdutos.prototype.inserir = function () {
        var _a;
        var novosProdutos = [
            new produto_1.default('Shampoo', 30),
            new produto_1.default('Condicionador', 35),
            new produto_1.default('Gel de cabelo', 25),
            new produto_1.default('Creme hidratante', 40),
            new produto_1.default('Protetor solar', 50),
            new produto_1.default('Sabonete líquido', 20),
            new produto_1.default('Desodorante', 15),
            new produto_1.default('Locao pos-barba', 28),
            new produto_1.default('Perfume', 60),
            new produto_1.default('Oleo de massagem', 45)
        ];
        (_a = this.produtos).push.apply(_a, novosProdutos);
    };
    return InserirProdutos;
}());
exports.default = InserirProdutos;
