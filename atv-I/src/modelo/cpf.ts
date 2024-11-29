export default class CPF {
    private valor: string
    private dataEmissao: Date

    constructor(valor:string, data: string){
        this.valor = valor
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        this.dataEmissao = new Date(ano, mes, dia)
    }

    public get getValor(): string{
        return this.valor
    }
    public get getDataEmissao(): Date{
        return this.dataEmissao
    }
}