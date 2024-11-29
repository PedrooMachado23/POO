import React, { useState } from "react";
import { NavBar } from "../../components/navBar/navBar";
import { ProdServTable } from "../../components/prodServTable/prodServTable";

interface Service {
    id:number;
    codigo: string;
    nome: string;
    valor: number;
}

export function ServicePage() {
    const [activeMenu, setActiveMenu] = useState(1)
    const [overlay, setOverlay] = useState(false)
    const [services, setServices] = useState<Service[]>([
        {
            id: 1,
            codigo: '0000AAAB',
            nome: 'Fazer as unhas',
            valor: 20
        },
        {
            id: 2,
            codigo: '0000AAAC',
            nome: 'Fazer cabelo',
            valor: 50
        },
        {
            id: 3,
            codigo: '0000AAAD',
            nome: 'Maquiagem',
            valor: 30
        },
        {
            id: 4,
            codigo: '0000AAAE',
            nome: 'Limpeza de pele',
            valor: 40
        },
        {
            id: 5,
            codigo: '0000AAAF',
            nome: 'Depilacao',
            valor: 25
        },
        {
            id: 6,
            codigo: '0000AAAG',
            nome: 'Fazer barba',
            valor: 5
        },
        {
            id: 7,
            codigo: '0000AAAH',
            nome: 'Corte de cabelo',
            valor: 15
        },
        {
            id: 8,
            codigo: '0000AAAI',
            nome: 'Barba e cabelo',
            valor: 20
        },
        {
            id: 9,
            codigo: '0000AAAJ',
            nome: 'Hidratacao capilar',
            valor: 30
        },
        {
            id: 10,
            codigo: '0000AAAK',
            nome: 'Massagem relaxante',
            valor: 50
        }
    ]);

    const handleChangeMenu = (newMenu: number) => {
        setActiveMenu(newMenu)
    }
    
    return(
        <div>
            <div className={`background ${overlay === true ? 'darkened' : ''}`}>
                <NavBar activeButton={4}/>
                <div className="container-fluid d-flex justify-content-center menuContainer">
                    <button className={`my-2 mx-1 btn ${activeMenu === 1 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(1)}>
                    Ver Serviços</button>

                    <button className={`my-2 mx-1 btn ${activeMenu === 2 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(2)}>
                    Cadastrar Serviço</button>
                </div>
            </div>
            <ProdServTable offers={services} setOffers={setServices} offerType='Serviço' activeMenu={activeMenu} overlayParent={setOverlay} />
        </div>
    )
} 