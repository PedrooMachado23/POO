import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Atualizar from "./atualizar";
import ListagemCliente from "../listar/listagemCliente";

export default class AtualizarCliente extends Atualizar{
    private clientes: Array<Cliente>
    private listagem: ListagemCliente
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        this.listagem = new ListagemCliente(clientes)
    }

    public atualizar(): void{
        let execucao = true
        while (execucao){
            this.listagem.listar()
            let nomeBuscado = this.entrada.receberTexto('Digite o nome do cliente para editar ou "sair" para sair: ')

            if (nomeBuscado.toLowerCase() == 'sair'){
                execucao = false
                break
            }

            let clienteRequisitado = this.clientes.find(cliente => cliente.nome === nomeBuscado);

            if(clienteRequisitado){
                let opcao = this.entrada.receberTexto('Dado a atualizar (nome, nome social, cpf): ')

                switch (opcao.toLowerCase()){
                    case 'nome':
                        clienteRequisitado.nome = this.entrada.receberTexto('Novo nome: ')
                    case 'nome social':
                        clienteRequisitado.nome = this.entrada.receberTexto('Novo nome social: ')
                    case 'cpf':
                        let valorCpf = this.entrada.receberTexto('Novo número CPF: ')
                        let emissaoCpf = this.entrada.receberTexto('Nova data de emissão: ')
                        let cpf = new CPF(valorCpf, emissaoCpf)

                        clienteRequisitado.setCpf = cpf
                }
            }else{
                console.log('Cliente não encontrado')
            }
        }
        

    }
}