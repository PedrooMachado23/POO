import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import ListagemProduto from "../listar/listagemProduto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private listagem: ListagemProduto
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>){
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.listagem = new ListagemProduto(clientes, produtos)
        this.entrada = new Entrada()
    }

    public deletar(): void{
        let execucao = true
        while (execucao) {
            this.listagem.listar()
            let nome = this.entrada.receberTexto('Digite o nome do produto para excluir ou "sair" para sair: ')

            if (nome == 'sair'){
                execucao = false
                break
            }

            let produtoIndex = this.produtos.findIndex(produto => produto.nome === nome)

            if (produtoIndex !== -1){
                this.produtos.splice(produtoIndex, 1)
                console.log(`Cliente ${nome} apagado!`)
            } else {
                console.log('Cliente não encontrado')
            }
        }
    }
}