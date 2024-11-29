import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import ListagemCliente from "../listar/listagemCliente";
import Deletar from "./deletar";

export default class DeletarClientes extends Deletar{
    private clientes: Array<Cliente>
    private listagem: ListagemCliente
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.listagem = new ListagemCliente(clientes)
        this.entrada = new Entrada()
    }

    public deletar(): void{
        let execucao = true
        
        while (execucao){
            this.listagem.listar()
            let nomeBuscado = this.entrada.receberTexto('Digite o nome do cliente que deseja apagar ou "sair" para sair: ')
            
            if (nomeBuscado.toLowerCase() == 'sair'){
                execucao = false
                break
            }

            let clienteRequisitado = this.clientes.findIndex(cliente => cliente.nome === nomeBuscado);
            
            if (clienteRequisitado !== -1){
                this.clientes.splice(clienteRequisitado, 1);
                console.log(`Cliente ${nomeBuscado} apagado`)
            } else{
                console.log('Cliente não encotrado')
            }
        }
    }
}