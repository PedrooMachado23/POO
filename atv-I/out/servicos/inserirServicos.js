"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var servico_1 = __importDefault(require("../modelo/servico"));
var InserirServicos = /** @class */ (function () {
    function InserirServicos(servicos) {
        this.servicos = servicos;
    }
    InserirServicos.prototype.inserir = function () {
        var _a;
        var novosServicos = [
            new servico_1.default('Fazer unhas', 20),
            new servico_1.default('Fazer cabelo', 50),
            new servico_1.default('Maquiagem', 30),
            new servico_1.default('Limpeza de pele', 40),
            new servico_1.default('Depilacao', 25),
            new servico_1.default('Fazer barba', 5),
            new servico_1.default('Corte de cabelo', 15),
            new servico_1.default('Barba e cabelo', 20),
            new servico_1.default('Hidratacao capilar', 30),
            new servico_1.default('Massagem relaxante', 50)
        ];
        (_a = this.servicos).push.apply(_a, novosServicos);
    };
    return InserirServicos;
}());
exports.default = InserirServicos;
