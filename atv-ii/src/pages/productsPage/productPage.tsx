import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import  ProdServTable from "../../components/prodServTable/prodServTable";

interface Product {
    id: number;
    codigo: string;
    nome: string;
    valor: number;
}

interface ProductPageState {
    activeMenu: number;
    overlay: boolean;
    products: Product[];
}

class ProductPage extends Component<{}, ProductPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            activeMenu: 1,
            overlay: false,
            products: [
                {
                    id: 1,
                    codigo: 'AAAA0001',
                    nome: 'Shampoo',
                    valor: 30,
                },
                {
                    id: 2,
                    codigo: 'AAAA0002',
                    nome: 'Condicionador',
                    valor: 35,
                },
                {
                    id: 3,
                    codigo: 'AAAA0003',
                    nome: 'Gel de cabelo',
                    valor: 25,
                },
                {
                    id: 4,
                    codigo: 'AAAA0004',
                    nome: 'Creme hidratante',
                    valor: 40,
                },
                {
                    id: 5,
                    codigo: 'AAAA0005',
                    nome: 'Protetor solar',
                    valor: 50,
                },
                {
                    id: 6,
                    codigo: 'AAAA0006',
                    nome: 'Sabonete líquido',
                    valor: 20,
                },
                {
                    id: 7,
                    codigo: 'AAAA0007',
                    nome: 'Desodorante',
                    valor: 15,
                },
                {
                    id: 8,
                    codigo: 'AAAA0008',
                    nome: 'Locao pos-barba',
                    valor: 28,
                },
                {
                    id: 9,
                    codigo: 'AAAA0009',
                    nome: 'Perfume',
                    valor: 60,
                },
                {
                    id: 10,
                    codigo: 'AAAA0010',
                    nome: 'Oleo de massagem',
                    valor: 45,
                },
            ],
        };
    }

    handleChangeMenu = (newMenu: number) => {
        this.setState({ activeMenu: newMenu });
    };

    render() {
        const { activeMenu, overlay, products } = this.state;

        return (
            <div>
                <div className={`background ${overlay ? 'darkened' : ''}`}>
                    <NavBar activeButton={3} />
                    <div className="container-fluid d-flex justify-content-center menuContainer">
                        <button
                            className={`my-2 mx-1 btn ${activeMenu === 1 ? 'btn-light' : 'btn-outline-light'}`}
                            onClick={() => this.handleChangeMenu(1)}
                        >
                            Ver Produtos
                        </button>

                        <button
                            className={`my-2 mx-1 btn ${activeMenu === 2 ? 'btn-light' : 'btn-outline-light'}`}
                            onClick={() => this.handleChangeMenu(2)}
                        >
                            Cadastrar Produto
                        </button>
                    </div>
                </div>

                <ProdServTable
                    offers={products}
                    setOffers={(newProducts: Product[]) => this.setState({ products: newProducts })}
                    offerType="Produto"
                    activeMenu={activeMenu}
                    overlayParent={(isOverlay: boolean) => this.setState({ overlay: isOverlay })}
                />
            </div>
        );
    }
}

export default ProductPage;
