import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemCliente extends Listagem{
    private clientes: Array<Cliente>
    private listaProdutos: Produto[] = []

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void{
        console.log('Clientes existentes')
        this.clientes.forEach(cliente =>{
            console.log('Nome: ', cliente.nome)
            console.log('Nome Social:', cliente.nomeSocial)
            console.log('CPF: ', cliente.getCpf)
            console.log('Compras: ', cliente.getProdutosConsumidos)
            console.log('Servicos: ', cliente.getServicosConsumidos)
            console.log('------\n')
        })
        
    }

    public listarMaisCompras(sort: string): void{
        console.log('10 clientes que mais compraram')
        let clientesOrdenados = this.clientes.slice().sort((cliente1, cliente2) =>{
            let total1 = cliente1.getProdutosConsumidos.length + cliente1.getServicosConsumidos.length
            let total2 = cliente2.getProdutosConsumidos.length + cliente2.getServicosConsumidos.length
            if (sort == 'mais'){
                return total2 - total1
            } else if(sort == 'menos'){
                return total1-total2
            }
            return 0
        })

        for (let i = 0; i < 10; i++){
            let cliente = clientesOrdenados[i]
            let produtos = cliente.getProdutosConsumidos.map(produto => produto.nome).join(', ');
            let servicos = cliente.getServicosConsumidos.map(servico => servico.nome).join(', ');

            console.log(`${i + 1} - ${cliente.nome} => Produtos: [${produtos}] Serviços: [${servicos}]`);
        }
        console.log('')
    }

    public listarMaisGasto(): void{
        console.log('5 clientes que mais gastaram')
        let clientesOrdenados = this.clientes.slice().sort((cliente1, cliente2) =>{
            let total1 = 0
            cliente1.getProdutosConsumidos.forEach(produto =>{
                total1 += produto.getValor
            })
            cliente1.getServicosConsumidos.forEach(servico => {
                total1 += servico.getValor
            })

            let total2 = 0
            cliente2.getProdutosConsumidos.forEach(produto =>{
                total2 += produto.getValor
            })
            cliente2.getServicosConsumidos.forEach(servico => {
                total2 += servico.getValor
            })

            return total2 - total1
        })

        for (let i = 0; i < 5; i++){
            let cliente = clientesOrdenados[i]
            let gastoProd = 0
            cliente.getProdutosConsumidos.forEach(produto =>{
                gastoProd += produto.getValor
            })
            
            let gastoServ = 0
            cliente.getServicosConsumidos.forEach(servico =>{
                gastoServ += servico.getValor
            })

            console.log(`${i+1} - ${cliente.nome} => Gasto com produtos: R$${gastoProd} Gasto com servicos: R$${gastoServ}. Total =  R$${gastoProd + gastoServ}`)
        }
        console.log('')
    }

    public listarGenero(): void{
        console.log('Clientes com base no gênero\n')

        console.log('Gênero Masculino')
        this.clientes.forEach(cliente =>{
            if (cliente.genero.toLowerCase() == 'masculino'){
                console.log(`${cliente.nome}`)
            }
        })
        console.log('\n')

        console.log('Gênero Feminino\n')
        this.clientes.forEach(cliente =>{
            if (cliente.genero.toLowerCase() == 'feminino'){
                console.log(`${cliente.nome}`)
            }
        })
        console.log('\n')
    }
}