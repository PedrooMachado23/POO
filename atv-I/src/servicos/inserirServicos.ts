import Servico from "../modelo/servico";

export default class InserirServicos {
    private servicos: Array<Servico>
    
    constructor(servicos: Array<Servico>){
        this.servicos = servicos
    }

    public inserir(): void{
        const novosServicos = [
            new Servico('Fazer unhas', 20),
            new Servico('Fazer cabelo', 50),
            new Servico('Maquiagem', 30), 
            new Servico('Limpeza de pele', 40), 
            new Servico('Depilacao', 25), 
    
            new Servico('Fazer barba', 5), 
            new Servico('Corte de cabelo', 15), 
            new Servico('Barba e cabelo', 20), 
            new Servico('Hidratacao capilar', 30), 
            new Servico('Massagem relaxante', 50)
        ]

        this.servicos.push(...novosServicos)
    }
}