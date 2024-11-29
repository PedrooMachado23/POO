import Produto from "../modelo/produto";

export default class InserirProdutos {
    private produtos: Array<Produto>;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public inserir(): void{
        const novosProdutos = [
            new Produto('Shampoo', 30),
            new Produto('Condicionador', 35),
            new Produto('Gel de cabelo', 25),
            new Produto('Creme hidratante', 40),
            new Produto('Protetor solar', 50),
            new Produto('Sabonete líquido', 20),
            new Produto('Desodorante', 15),
            new Produto('Locao pos-barba', 28),
            new Produto('Perfume', 60),
            new Produto('Oleo de massagem', 45)
        ]

        this.produtos.push(...novosProdutos)
    }
}
