import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "../listar/listagem";
import ListagemServico from "../listar/listagemServico";
import Deletar from "./deletar";

export default class DeletarServico extends Deletar{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private listagem: Listagem
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>){
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.listagem = new ListagemServico(clientes, servicos)
        this.entrada = new Entrada()
    }

    public deletar(): void{
        this.listagem.listar()
        let execucao = true
        while (execucao){
            let nome = this.entrada.receberTexto('Digite o nome do servico para apagar ou "sair" para sair: ')

            if (nome == 'sair'){
                execucao = false
                break
            }

            let servicoIndex = this.servicos.findIndex(servico => servico.nome === nome)

            if (servicoIndex !== -1){
                this.servicos.splice(servicoIndex, 1)
                console.log(`Servico ${nome} apagado`)
            }
        }
    }
}