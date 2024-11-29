import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>){
        super()
        this.clientes = clientes
        this.servicos = servicos
    }

    public listar(): void{
        console.log('Serivcos existentes')
        console.log('------------')

        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`)
            console.log(`Valor: R$${servico.getValor}`)
            console.log('------\n')
        })
    }

    public listarGenero(): void{
        let consumosMasc: Record<string, number> = {}
        let consumosFem: Record<string, number> = {}

        this.clientes.forEach(cliente =>{
            let servicos = cliente.getServicosConsumidos
            let genero = cliente.genero

            servicos.forEach(servico =>{
                let nomeServico = servico.nome

                let alvo = consumosMasc
                if (genero.toLowerCase() == 'feminino'){
                    alvo = consumosFem
                }

                if (!alvo[nomeServico]) {
                    alvo[nomeServico] = 1
                } else {
                    alvo[nomeServico]++
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

        console.log('\nServicos mais consumidos pelo público Masculino:')
        console.log('------------')
        produtosMasc.forEach((servico, index) =>{
            console.log(`${index+1} - ${servico[0]}, quantidade: ${servico[1]}`)
        })
        console.log('')

        console.log('Servicos mais consumidos pelo público Feminino:')
        console.log('------------')
        produtosFem.forEach((servico, index) =>{
            console.log(`${index+1} - ${servico[0]}, quantidade: ${servico[1]}`)
        })
        console.log('')
    }
}