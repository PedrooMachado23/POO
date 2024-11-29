import React, { Component } from "react";
import './navBar.css';
import downArrow from '../../assets/svgs/arrow-down-3101.svg';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    activeButton: number;
    navigate: any;
}

interface NavBarState {
    openMenu: boolean;
}

class NavBar extends Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            openMenu: false,
        };
    }

    handleOpenMenu = () => {
        this.setState((prevState) => ({
            openMenu: !prevState.openMenu,
        }));
    };

    render() {
        const { activeButton, navigate } = this.props;
        const { openMenu } = this.state;

        return (
            <div className="container-fluid d-flex flex-column flex-sm-row justify-content-sm-between bg-primary text-white align-items-center py-3">
                <p className="fs-3 m-0 mb-2 mb-sm-0">WorldBeauty</p>
                <div className="contiainer-fluid d-none d-sm-block fs-5">
                    <button onClick={() => navigate('/')}
                        className={`mx-1 btn ${activeButton === 2 ? 'btn-light' : 'btn-outline-light'}`}>
                        Clientes
                    </button>

                    <button onClick={() => navigate('/productPage')}
                        className={`mx-1 btn ${activeButton === 3 ? 'btn-light' : 'btn-outline-light'}`}>
                        Produtos
                    </button>
                    
                    <button onClick={() => navigate('/servicePage')}
                        className={`mx-1 btn ${activeButton === 4 ? 'btn-light' : 'btn-outline-light'}`}>Servicos</button>
                </div>
                <div className="d-xs-block d-sm-none">
                    <button className="downArrowButton py-1 px-5" onClick={this.handleOpenMenu}>
                        <img src={downArrow} alt="" className={`downArrow ${openMenu === true ? 'downArrowRotation' : ''}`}/>
                    </button>
                    {openMenu === true && <div className={`d-flex flex-column responsiveMenu`}>
                        <button className={`my-1 btn ${activeButton === 2 ? 'btn-light' : 'btn-outline-light'}`} onClick={() => navigate('/')}>Clientes</button>
                        <button className={`my-1 btn ${activeButton === 3 ? 'btn-light' : 'btn-outline-light'}`} onClick={() => navigate('/productPage')}>Produtos</button>
                        <button className={`my-1 btn ${activeButton === 4 ? 'btn-light' : 'btn-outline-light'}`} onClick={() => navigate('/servicePage')}>Serviços</button>
                    </div>}
                </div>
            </div>
        );
    }
}

// Componente funcional que usa o useNavigate e passa para o componente de classe
const NavBarWithNavigate = (props: { activeButton: number }) => {
    const navigate = useNavigate();  // Usando o hook useNavigate
    return <NavBar {...props} navigate={navigate} />;
};

export default NavBarWithNavigate;
