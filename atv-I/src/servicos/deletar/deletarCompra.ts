import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import ListagemCliente from "../listar/listagemCliente";
import Deletar from "./deletar";

export default class DeletarCompra extends Deletar {
    private clientes: Array<Cliente>
    private listagemClientes: ListagemCliente
    private listaProdutos: Produto[] = []
    private listaServicos: Servico[] = []
    private entrada: Entrada

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.listagemClientes = new ListagemCliente(clientes)
        this.entrada = new Entrada()
    }

    public deletar(): void {
        let execucao = true
        while (execucao){
            this.listagemClientes.listar()
            let nome = this.entrada.receberTexto('Digite o nome do cliente que deseja retirar a compra ou "sair" para cancelar: ')
    
            if (nome == 'sair'){
                execucao = false
                break
            }

            let cliente = this.clientes.find(cliente => cliente.nome === nome)
            if (cliente){
                this.listaProdutos = cliente.getProdutosConsumidos
                this.listaServicos = cliente.getServicosConsumidos
            }

            console.log(`Produtos comprados`)
            console.log('------------')
            this.listaProdutos.forEach((produto, index) => {
                console.log(`${index+1} - ${produto.getNome} ${produto.getValor}`)
            })
            console.log('0 - cancelar\n')
            let produtos = this.entrada.receberTexto('Digite o número dos produtos que queria remover: ').split(', ')
            if (produtos[0] == '0'){} else{
                produtos.forEach(text =>{
                    let index = parseInt(text) - 1; // Converte para número e ajusta para 0
                    if (index >= 0 && index < this.listaProdutos.length) { // Verifica se o índice é válido
                        this.listaProdutos.splice(index, 1);
                    } else {
                        console.log(`Índice inválido: ${text}`);
                    }
                })
            }

            console.log(`Servicos adquiridos`)
            console.log('------------')
            this.listaServicos.forEach((servico, index) => {
                console.log(`${index+1} - ${servico.nome} ${servico.getValor}`)
            })
            console.log('0 - cancelar\n')
            let servicos = this.entrada.receberTexto('Digite o número dos servicos que queria remover: ').split(', ')
            if (servicos[0] == '0'){} else{
                servicos.forEach(text =>{
                    let index = parseInt(text) - 1; // Converte para número e ajusta para 0
                    if (index >= 0 && index < this.listaServicos.length) { // Verifica se o índice é válido
                        this.listaServicos.splice(index, 1);
                    } else {
                        console.log(`Índice inválido: ${text}`);
                    }
                })
            }
        }
        
    }
}