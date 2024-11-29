import CPF from "./cpf"
import Produto from "./produto"
import Servico from "./servico"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private dataCadastro: Date
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.dataCadastro = new Date()
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getCpf(): CPF{
        return this.cpf
    }
    public get getDataCadastro(): Date{
        return this.dataCadastro
    }
    public get getProdutosConsumidos(): Array<Produto>{
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico>{
        return this.servicosConsumidos
    }
    public set setCpf(cpf: CPF){
        this.cpf = cpf;
    }
    public set setDataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }
    public set setProdutosConsumidos(produtosConsumidos: Array<Produto>) {
        this.produtosConsumidos = produtosConsumidos;
    }
    public set setServicosConsumidos(servicosConsumidos: Array<Servico>) {
        this.servicosConsumidos = servicosConsumidos;
    }
}