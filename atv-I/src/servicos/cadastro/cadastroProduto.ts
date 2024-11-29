import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void{
        console.log('Cadastrar Produto')
        console.log('------------')
        let nome = this.entrada.receberTexto('Nome do produto: ')
        let valor = this.entrada.receberNumero('Valor do produto: ')

        let produto = new Produto(nome, valor)
        this.produtos.push(produto)
    }
}