"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var InserirClientes = /** @class */ (function () {
    function InserirClientes(clientes) {
        this.clientes = clientes;
    }
    InserirClientes.prototype.inserir = function () {
        var _a;
        var novosClientes = [
            new cliente_1.default('Pedro', 'Pe', new cpf_1.default('11122288870', '01/01/2001'), 'Masculino'),
            new cliente_1.default('Esther', 'Tete', new cpf_1.default('11122233344', '01/01/2001'), 'Feminino'),
            new cliente_1.default('Lucas', 'Luca', new cpf_1.default('11122255566', '02/02/2001'), 'Masculino'),
            new cliente_1.default('Ana', 'Aninha', new cpf_1.default('11122277788', '03/03/2001'), 'Feminino'),
            new cliente_1.default('João', 'Jota', new cpf_1.default('11122299900', '04/04/2001'), 'Masculino'),
            new cliente_1.default('Maria', 'Mari', new cpf_1.default('11122311122', '05/05/2001'), 'Feminino'),
            new cliente_1.default('Carlos', 'Carlão', new cpf_1.default('11122333344', '06/06/2001'), 'Masculino'),
            new cliente_1.default('Fernanda', 'Fê', new cpf_1.default('11122355566', '07/07/2001'), 'Feminino'),
            new cliente_1.default('Gabriel', 'Gabi', new cpf_1.default('11122377788', '08/08/2001'), 'Masculino'),
            new cliente_1.default('Rafaela', 'Rafa', new cpf_1.default('11122399900', '09/09/2001'), 'Feminino'),
            new cliente_1.default('Felipe', 'Fê', new cpf_1.default('11122411122', '10/10/2001'), 'Masculino'),
            new cliente_1.default('Juliana', 'Ju', new cpf_1.default('11122433344', '11/11/2001'), 'Feminino'),
            new cliente_1.default('Roberto', 'Bob', new cpf_1.default('11122455566', '12/12/2001'), 'Masculino'),
            new cliente_1.default('Sofia', 'Sô', new cpf_1.default('11122477788', '13/01/2001'), 'Feminino'),
            new cliente_1.default('Vinícius', 'Vini', new cpf_1.default('11122499900', '14/02/2001'), 'Masculino'),
            new cliente_1.default('Tatiane', 'Tati', new cpf_1.default('11122511122', '15/03/2001'), 'Feminino'),
            new cliente_1.default('André', 'Dre', new cpf_1.default('11122533344', '16/04/2001'), 'Masculino'),
            new cliente_1.default('Camila', 'Cami', new cpf_1.default('11122555566', '17/05/2001'), 'Feminino'),
            new cliente_1.default('Bruno', 'Bru', new cpf_1.default('11122577788', '18/06/2001'), 'Masculino'),
            new cliente_1.default('Isabela', 'Bel', new cpf_1.default('11122599900', '19/07/2001'), 'Feminino')
        ];
        (_a = this.clientes).push.apply(_a, novosClientes);
    };
    return InserirClientes;
}());
exports.default = InserirClientes;
