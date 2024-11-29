import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import ListagemServico from "../listar/listagemServico";
import Atualizar from "./atualizar";

export default class AtualizarServico extends Atualizar{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private listagem: ListagemServico
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>){
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.listagem = new ListagemServico(clientes, servicos)
        this.entrada = new Entrada()
    }

    public atualizar(): void{
        let execucao = true
        while (execucao){
            this.listagem.listar()
            let nome = this.entrada.receberTexto('Digite o nome do servico para editar ou "sair" para sair: ')

            if (nome == 'sair'){
                execucao = false
                break
            }

            let servico  = this.servicos.find(servico => servico.nome === nome)

            if (servico){
                let opcao = this.entrada.receberTexto('Dado a atualizar (nome, valor): ')

                switch (opcao) {
                    case 'nome':
                        servico.nome = this.entrada.receberTexto('Novo nome: ')
                    case 'valor':
                        servico.setValor = this.entrada.receberNumero('Novo valor: ')
                }   
            } else {
                console.log('Cliente não encontrado')
            }
        }
    }
}