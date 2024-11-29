import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro{
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void{
        console.log('Insira as informações para cadastrar seu cliente')
        let nome = this.entrada.receberTexto('Nome: ')
        let nomeSocial = this.entrada.receberTexto('Nome Social: ')
        let genero = this.entrada.receberTexto('Gênero: ')
        let valorCpf = this.entrada.receberTexto('Número de CPF: ')
        let emissaoCpf = this.entrada.receberTexto('Data de Emissão (dd/mm/yyyy): ')

        let cpf = new CPF(valorCpf, emissaoCpf)
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        this.clientes.push(cliente)

        console.log('\nCadastro concluído\n')
    }
}