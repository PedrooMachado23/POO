import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void{
        console.log('Cadastrar serviço')
        console.log('------------')
        let nome = this.entrada.receberTexto('Nome do serviço: ')
        let valor = this.entrada.receberNumero('Valor do serviço: ')

        let servico = new Servico(nome, valor)
        this.servicos.push(servico)
    }
}