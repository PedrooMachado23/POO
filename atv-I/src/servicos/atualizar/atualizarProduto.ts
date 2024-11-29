import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import ListagemProduto from "../listar/listagemProduto";
import Atualizar from "./atualizar";

export default class AtualizarProduto extends Atualizar{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    private listagem: ListagemProduto

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>){
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
        this.listagem = new ListagemProduto(clientes, produtos)
    }

    public atualizar(): void{
        let execucao = true
        while (execucao){
            this.listagem.listar()
            let nome = this.entrada.receberTexto('Digite o nome do produto para editar ou "sair" para sair: ')
            
            if (nome == 'sair'){
                execucao = false
                break
            }

            let produto = this.produtos.find(produto => produto.nome === nome)

            if (produto){
                let opcao = this.entrada.receberTexto('Dado a atualizar (nome, valor): ')

                switch (opcao.toLowerCase()){
                    case 'nome':
                        produto.nome = this.entrada.receberTexto('Novo nome: ')
                    case 'valor':
                        produto.setValor = this.entrada.receberNumero('Novo valor: ')
                }
            } else {
                console.log('Cliente não encontrado')
            }
        }
    }
}