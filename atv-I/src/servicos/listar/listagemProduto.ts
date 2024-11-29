import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProduto extends Listagem{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>){
        super()
        this.clientes = clientes
        this.produtos = produtos
    }

    public listar(): void{
        console.log('Produtos existentes')
        this.produtos.forEach(produto =>{
            console.log(`Nome: ${produto.nome}`)
            console.log(`Valor: R$${produto.getValor}`)
            console.log('------\n')
        })
    }

    public listarGenero(): void{
        let consumosMasc: Record<string, number> = {}
        let consumosFem: Record<string, number> = {}

        this.clientes.forEach(cliente =>{
            let produtos = cliente.getProdutosConsumidos
            let genero = cliente.genero

            produtos.forEach(produto =>{
                let nomeProduto = produto.nome

                let alvo = consumosMasc
                if (genero.toLowerCase() == 'feminino'){
                    alvo = consumosFem
                }

                if (!alvo[nomeProduto]) {
                    alvo[nomeProduto] = 1
                } else {
                    alvo[nomeProduto]++
                }
            }) 
        })

        const ordenadoMasc: Record<string, number> = Object.fromEntries(
            Object.entries(consumosMasc).sort((a, b) => b[1] - a[1])
        );
        const produtosMasc = Object.entries(ordenadoMasc)

        const ordenadoFem: Record<string, number> = Object.fromEntries(
            Object.entries(consumosFem).sort((a, b) => b[1] - a[1])
        );
        const produtosFem = Object.entries(ordenadoFem)

        console.log('\nProdutos mais consumidos pelo público Masculino:')
        console.log('------------')
        produtosMasc.forEach((produto, index) =>{
            console.log(`${index+1} - ${produto[0]}, quantidade: ${produto[1]}`)
        })
        console.log('')

        console.log('Produtos mais consumidos pelo público Feminino:')
        console.log('------------')
        produtosFem.forEach((produto, index) =>{
            console.log(`${index+1} - ${produto[0]}, quantidade: ${produto[1]}`)
        })
        console.log('')
    }
}