import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import ListagemCliente from "../listar/listagemCliente";
import ListagemProduto from "../listar/listagemProduto";
import ListagemServico from "../listar/listagemServico";
import Cadastro from "./cadastro";

export default class CadastrarCompra extends Cadastro{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private listagemCliente: ListagemCliente
    private listagemProduto: ListagemProduto
    private listagemServico: ListagemServico
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.listagemCliente = new ListagemCliente(clientes)
        this.listagemProduto = new ListagemProduto(clientes, produtos)
        this.listagemServico = new ListagemServico(clientes, servicos)
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let execucao = true
        while (execucao){
            this.listagemCliente.listar()
            let nome = this.entrada.receberTexto('Digite o nome do cliente que fez a compra ou "sair" para cancelar: ')

            if (nome == 'sair'){
                execucao = false
                break
            }

            this.listagemProduto.listar()
            let carrinhoProduto = this.entrada.receberTexto('Digite o(s) nome(s) do(s) produtos(s) que o cliente comprou: ').split(', ')
            
            let cliente = this.clientes.find(cliente => cliente.nome === nome)
            let historicoProduto: Produto[] = [];
            if (cliente){
                historicoProduto = cliente.getProdutosConsumidos
            } else {
                console.log(`Cliente ${nome} não encontrado`)
                continue
            }

            carrinhoProduto.forEach(nomeProduto => {
                let produto = this.produtos.find(produto => produto.nome === nomeProduto)
                if (produto){
                    historicoProduto.push(produto)
                    console.log(`Produto ${nomeProduto} comprado!`)
                } else {
                    console.log(`Produto ${nomeProduto} não encontrado`)
                }
            })  
            
            this.listagemServico.listar()
            let carrinhoServico = this.entrada.receberTexto('Digite o(s) nome(s) do(s) servico(s) que o cliente comprou: ').split(', ')

            let historicoServico = cliente.getServicosConsumidos
            carrinhoServico.forEach(nomeServico => {
                let servico = this.servicos.find(servico => servico.nome === nomeServico)
                if (servico){
                    historicoServico.push(servico)
                    console.log(`Servico ${nomeServico} comprado!`)
                } else {
                    console.log(`Servico ${nomeServico} não encontrado`)
                }
            })
        }
    }

    public inserir(): void{
        this.clientes.forEach(cliente => {
            const quantidadeCompras = Math.floor(Math.random() * 10) + 1;
            for (let i = 0; i < quantidadeCompras; i++) {
                const produtoAleatorio = this.produtos[Math.floor(Math.random() * this.produtos.length)];
                let historicoCompra = cliente.getProdutosConsumidos;
                historicoCompra.push(produtoAleatorio);
            }

            for (let i = 0; i < quantidadeCompras; i++) {
                const servicoAleatorio = this.servicos[Math.floor(Math.random() * this.servicos.length)]
                let historicoServico = cliente.getServicosConsumidos
                historicoServico.push(servicoAleatorio)
            }
        });
    }
}