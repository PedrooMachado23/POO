import React, { Component } from "react";

interface Product {
    id: number;
    codigo: string;
    nome: string;
    valor: number;
}

interface Service {
    id: number;
    codigo: string;
    nome: string;
    valor: number;
}

interface ProdServTableProps {
    offers: Product[] | Service[];
    setOffers: (offers: Product[] | Service[]) => void;
    offerType: string;
    activeMenu: number;
    overlayParent: (bool: boolean) => void;
}

interface ProdServTableState {
    activeDetails: number;
    editingOffer: Product | Service | null;
}

class ProdServTable extends Component<ProdServTableProps, ProdServTableState> {
    constructor(props: ProdServTableProps) {
        super(props);
        this.state = {
            activeDetails: 0,
            editingOffer: null,
        };
    }

    handleChangeDetails = (offerId: number) => {
        this.setState((prevState) => ({
            activeDetails: prevState.activeDetails === offerId ? 0 : offerId,
        }));
    };

    handleEditOffer = (offerId: number) => {
        const { overlayParent, offers } = this.props;

        if (offerId === 0) {
            overlayParent(false);
            this.setState({ editingOffer: null, activeDetails: 0 });
            return;
        }

        const offerFound = offers.find((offer) => offer.id === offerId);

        if (offerFound) {
            overlayParent(true);
            this.setState({ editingOffer: offerFound });
        }
    };

    handleDeleteOffer = (offerId: number) => {
        const { offers, setOffers } = this.props;
        const updatedOffers = offers.filter((offer) => offer.id !== offerId);
        setOffers(updatedOffers);
    };

    handleEditingFieldChange = (field: keyof Product | keyof Service, value: string | number) => {
        this.setState((prevState) => ({
            editingOffer: prevState.editingOffer
                ? { ...prevState.editingOffer, [field]: value }
                : null,
        }));
    };

    render() {
        const { offers, setOffers, offerType, activeMenu, overlayParent }  = this.props
        const { activeDetails, editingOffer} = this.state

        return (
          <div>
            <div className={`background ${editingOffer !== null ? 'darkened' : ''}`}>
                {activeMenu === 1 &&
                <div className="container-fluid d-flex justify-contet-center">
                    <table className="table table-responsive table-bordered border-primary table-sm m-5 align-middle">
                        <thead>
                            <tr>
                                <th scope="col" className="col-1">ID</th>
                                <th scope="col" className="col-6">Nome</th>
                                <th scope="col" className="col-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {offers.length > 0 ? (
                                offers.map((offers: any, index: number) => (
                                    <React.Fragment key={offers.id}>
                                        <tr key={offers.id}>
                                            <th scope="row">{offers.id}</th>
                                            <td>{offers.nome}</td>
                                            <td className="d-flex justify-content-center">
                                                <button className="btn btn-success table-button-pattern"
                                                onClick={() => this.handleChangeDetails(offers.id)}>
                                                {activeDetails === offers.id ? 'Ocultar' : 'Detalhes'}</button>
                                            </td>
                                        </tr>
                                        {activeDetails === offers.id &&
                                        <tr>
                                            <td colSpan={3} className="p-0">
                                                <table className="table table-responsive table-sm m-0">
                                                    <thead></thead>
                                                    <tbody>
                                                        <tr className="p-0">
                                                            <td className="col-1"></td>
                                                            <td className="col-6">
                                                                <span className="d-flex flex-column justify-content-between">
                                                                    <span><strong>Código: </strong>{offers.codigo}</span>
                                                                    <span><strong>{offerType}: </strong> {offers.nome}</span>
                                                                    <span><strong>Valor: </strong>R$ {offers.valor}</span>
                                                                </span>
                                                            </td>
                                                            <td className="col-2">
                                                                <span className="d-flex flex-column align-items-center">
                                                                    <button className="btn my-1 btn-info table-button-pattern"
                                                                    onClick={() => this.handleEditOffer(offers.id)}>Editar</button>
                                                                    <button className="btn my-1 btn-danger table-button-pattern"
                                                                    onClick={() => this.handleDeleteOffer(offers.id)}>Excluir</button>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>}
                                    </React.Fragment>
                                ))
                            ) : (<div/>)}
                        </tbody>
                    </table>
                </div>}

                {activeMenu === 2 && <div className="d-flex container-fluid">
                    <div className="createUserForm mx-auto my-5 p-5 border border-black rounded border-2">
                        <form action="" className="d-flex flex-column">
                            <label htmlFor="" className="fs-4 mb-2">Código:</label>
                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                            <label htmlFor="" className="fs-4 mb-2">{offerType}:</label>
                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                            <label htmlFor="" className="fs-4 mb-2">Valor:</label>
                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>
                        </form>
                        <div className="container d-flex justify-content-end p-0">
                            <button className="btn btn-success fs-5">Salvar</button>
                        </div>
                    </div>
                </div>}
            </div>

            {editingOffer !== null && <div className={`${editingOffer !== null ? 'overlay' : ''}`} onClick={() => this.handleEditOffer(0)}>
                <div className="d-flex flex-column m-auto editForm rounded border border-dark overlay-2" onClick={(e) => e.stopPropagation()}>
                    <button className="closeButton mx-1" onClick={() => this.handleEditOffer(0)}>X</button>
                    <div className="d-flex flex-column mx-auto flex-grow-1">
                        <form action="" className="d-flex flex-column mt-5 col editingForm">
                            <label htmlFor="">Código:</label>
                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                value={this.state.editingOffer?.codigo || ''}
                                onChange={(e) => {
                                  const { value } = e.target;
                                  this.setState((prevState) => ({
                                    editingOffer: prevState.editingOffer 
                                      ? { ...prevState.editingOffer, codigo: value } 
                                      : null
                                  }));
                                }}/>
                            
                            <label htmlFor="">{offerType}:</label>
                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                value={this.state.editingOffer?.nome}
                                onChange={(e) => {
                                  const { value } = e.target;
                                  this.setState((prevState) => ({
                                    editingOffer: prevState.editingOffer 
                                      ? { ...prevState.editingOffer, nome: value } 
                                      : null
                                  }));
                                }}/>
                            
                            <label htmlFor="">Valor:</label>
                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                value={this.state.editingOffer?.valor}
                                onChange={(e) => {
                                  const { value } = e.target;
                                  this.setState((prevState) => ({
                                    editingOffer: prevState.editingOffer 
                                      ? { ...prevState.editingOffer, valor: Number(value) } 
                                      : null
                                  }));
                                }}/>
                        </form>
                        <div className="d-flex justify-content-between align-items mt-4 mb-5">
                            <button className="btn btn-success table-button-pattern" onClick={() => this.handleEditOffer(0)}>Salvar</button>
                            <button className="btn btn-warning table-button-pattern" onClick={() => this.handleEditOffer(0)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
        )
    }
}

export default ProdServTable;
