export default class Produto{
    public nome: string
    private valor: number

    constructor(nome: string, valor: number){
        this.nome = nome
        this.valor = valor
    }

    public get getNome(): string{
        return this.nome
    }
    public get getValor(): number{
        return this.valor
    }
    public set setValor(valor: number){
        this.valor = valor
    }
}