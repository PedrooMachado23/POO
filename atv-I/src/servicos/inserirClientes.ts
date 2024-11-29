import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";

export default class InserirClientes {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        this.clientes = clientes
    }

    public inserir(): void{
        const novosClientes = [
            new Cliente('Pedro', 'Pe', new CPF('11122288870', '01/01/2001'), 'Masculino'),
            new Cliente('Esther', 'Tete', new CPF('11122233344', '01/01/2001'), 'Feminino'),
            new Cliente('Lucas', 'Luca', new CPF('11122255566', '02/02/2001'), 'Masculino'),
            new Cliente('Ana', 'Aninha', new CPF('11122277788', '03/03/2001'), 'Feminino'),
            new Cliente('João', 'Jota', new CPF('11122299900', '04/04/2001'), 'Masculino'),
            new Cliente('Maria', 'Mari', new CPF('11122311122', '05/05/2001'), 'Feminino'),
            new Cliente('Carlos', 'Carlão', new CPF('11122333344', '06/06/2001'), 'Masculino'),
            new Cliente('Fernanda', 'Fê', new CPF('11122355566', '07/07/2001'), 'Feminino'),
            new Cliente('Gabriel', 'Gabi', new CPF('11122377788', '08/08/2001'), 'Masculino'),
            new Cliente('Rafaela', 'Rafa', new CPF('11122399900', '09/09/2001'), 'Feminino'),
            new Cliente('Felipe', 'Fê', new CPF('11122411122', '10/10/2001'), 'Masculino'),
            new Cliente('Juliana', 'Ju', new CPF('11122433344', '11/11/2001'), 'Feminino'),
            new Cliente('Roberto', 'Bob', new CPF('11122455566', '12/12/2001'), 'Masculino'),
            new Cliente('Sofia', 'Sô', new CPF('11122477788', '13/01/2001'), 'Feminino'),
            new Cliente('Vinícius', 'Vini', new CPF('11122499900', '14/02/2001'), 'Masculino'),
            new Cliente('Tatiane', 'Tati', new CPF('11122511122', '15/03/2001'), 'Feminino'),
            new Cliente('André', 'Dre', new CPF('11122533344', '16/04/2001'), 'Masculino'),
            new Cliente('Camila', 'Cami', new CPF('11122555566', '17/05/2001'), 'Feminino'),
            new Cliente('Bruno', 'Bru', new CPF('11122577788', '18/06/2001'), 'Masculino'),
            new Cliente('Isabela', 'Bel', new CPF('11122599900', '19/07/2001'), 'Feminino')
        ];
        this.clientes.push(...novosClientes)        
    }
}