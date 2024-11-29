import React, { useState } from "react";
import { NavBar } from "../../components/navBar/navBar";
import { ProdServTable } from "../../components/prodServTable/prodServTable";

interface Product {
    id: number;
    codigo: string;
    nome: string;
    valor: number
}

export function ProductPage() {
    const [activeMenu, setActiveMenu] = useState(1)
    const [overlay, setOverlay] = useState(false)
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            codigo: 'AAAA0001',
            nome: 'Shampoo',
            valor: 30
        },
        {
            id: 2,
            codigo: 'AAAA0002',
            nome: 'Condicionador',
            valor: 35
        },
        {
            id: 3,
            codigo: 'AAAA0003',
            nome: 'Gel de cabelo',
            valor: 25
        },
        {
            id: 4,
            codigo: 'AAAA0004',
            nome: 'Creme hidratante',
            valor: 40
        },
        {
            id: 5,
            codigo: 'AAAA0005',
            nome: 'Protetor solar',
            valor: 50
        },
        {
            id: 6,
            codigo: 'AAAA0006',
            nome: 'Sabonete líquido',
            valor: 20
        },
        {
            id: 7,
            codigo: 'AAAA0007',
            nome: 'Desodorante',
            valor: 15
        },
        {
            id: 8,
            codigo: 'AAAA0008',
            nome: 'Locao pos-barba',
            valor: 28
        },
        {
            id: 9,
            codigo: 'AAAA0009',
            nome: 'Perfume',
            valor: 60
        },
        {
            id: 10,
            codigo: 'AAAA0010',
            nome: 'Oleo de massagem',
            valor: 45
        }
    ])

    const handleChangeMenu = (newMenu: number) => {
        setActiveMenu(newMenu)
    }

    return(
        <div>
            <div className={`background ${overlay === true ? 'darkened' : ''}`}>
                <NavBar activeButton={3}/>
                <div className="container-fluid d-flex justify-content-center menuContainer">
                    <button className={`my-2 mx-1 btn ${activeMenu === 1 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(1)}>
                    Ver Produtos</button>

                    <button className={`my-2 mx-1 btn ${activeMenu === 2 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(2)}>
                    Cadastrar Produto</button>
                </div>
            </div>
            <ProdServTable offers={products} setOffers={setProducts} offerType='Produto' activeMenu={activeMenu} overlayParent={setOverlay}/>
        </div>
    )
}