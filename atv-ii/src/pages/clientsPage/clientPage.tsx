import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import './clientsPage.css'

interface CPF {
    valor: string,
    dataEmissao: Date
}

interface User {
    id: number,
    nome: string,
    nomeSocial: string,
    cpf: CPF,
    genero: string
}

class ClientPage extends Component {
    state = {
        activeMenu: 1,
        activeDetails: 0,
        editingUser: null as User | null,
        users: [
            { id: 1, nome: 'Pedro Henrique Machado', nomeSocial: 'Pedrin', cpf: { valor: '00000000000', dataEmissao: new Date('01/10/2001') }, genero: 'masculino' },
            { id: 2, nome: 'Pedro', nomeSocial: 'Pe', cpf: { valor: '11122288870', dataEmissao: new Date('01/01/2001') }, genero: 'masculino' },
            { id: 3, nome: 'Esther', nomeSocial: 'Tete', cpf: { valor: '11122233344', dataEmissao: new Date('01/01/2001') }, genero: 'feminino' },
            { id: 4, nome: 'Lucas', nomeSocial: 'Luca', cpf: { valor: '11122255566', dataEmissao: new Date('02/02/2001') }, genero: 'masculino' },
            { id: 5, nome: 'Ana', nomeSocial: 'Aninha', cpf: { valor: '11122277788', dataEmissao: new Date('03/03/2001') }, genero: 'feminino' },
            { id: 6, nome: 'João', nomeSocial: 'Jota', cpf: { valor: '11122299900', dataEmissao: new Date('04/04/2001') }, genero: 'masculino' },
            { id: 7, nome: 'Maria', nomeSocial: 'Mari', cpf: { valor: '11122311122', dataEmissao: new Date('05/05/2001') }, genero: 'feminino' },
            { id: 8, nome: 'Carlos', nomeSocial: 'Carlão', cpf: { valor: '11122333344', dataEmissao: new Date('06/06/2001') }, genero: 'masculino' },
            { id: 9, nome: 'Fernanda', nomeSocial: 'Fê', cpf: { valor: '11122355566', dataEmissao: new Date('07/07/2001') }, genero: 'feminino' },
            { id: 10, nome: 'Gabriel', nomeSocial: 'Gabi', cpf: { valor: '11122377788', dataEmissao: new Date('08/08/2001') }, genero: 'masculino' },
            { id: 11, nome: 'Rafaela', nomeSocial: 'Rafa', cpf: { valor: '11122399900', dataEmissao: new Date('09/09/2001') }, genero: 'feminino' },
            { id: 12, nome: 'Felipe', nomeSocial: 'Fê', cpf: { valor: '11122411122', dataEmissao: new Date('10/10/2001') }, genero: 'masculino' },
            { id: 13, nome: 'Juliana', nomeSocial: 'Ju', cpf: { valor: '11122433344', dataEmissao: new Date('11/11/2001') }, genero: 'feminino' },
            { id: 14, nome: 'Roberto', nomeSocial: 'Bob', cpf: { valor: '11122455566', dataEmissao: new Date('12/12/2001') }, genero: 'masculino' },
            { id: 15, nome: 'Sofia', nomeSocial: 'Sô', cpf: { valor: '11122477788', dataEmissao: new Date('13/01/2001') }, genero: 'feminino' },
            { id: 16, nome: 'Vinícius', nomeSocial: 'Vini', cpf: { valor: '11122499900', dataEmissao: new Date('14/02/2001') }, genero: 'masculino' },
            { id: 17, nome: 'Tatiane', nomeSocial: 'Tati', cpf: { valor: '11122511122', dataEmissao: new Date('15/03/2001') }, genero: 'feminino' },
            { id: 18, nome: 'André', nomeSocial: 'Dre', cpf: { valor: '11122533344', dataEmissao: new Date('16/04/2001') }, genero: 'masculino' },
            { id: 19, nome: 'Camila', nomeSocial: 'Cami', cpf: { valor: '11122555566', dataEmissao: new Date('17/05/2001') }, genero: 'feminino' },
            { id: 20, nome: 'Bruno', nomeSocial: 'Bru', cpf: { valor: '11122577788', dataEmissao: new Date('18/06/2001') }, genero: 'masculino' },
            { id: 21, nome: 'Isabela', nomeSocial: 'Bel', cpf: { valor: '11122599900', dataEmissao: new Date('19/07/2001') }, genero: 'feminino' },
        ]
    }

    handleChangeMenu = (newNumber: number) => {
        this.setState({ activeMenu: newNumber });
    }

    handleChangeDetails = (userId: number) => {
        const { activeDetails } = this.state;
        this.setState({ activeDetails: activeDetails === userId ? 0 : userId });
    }

    handleEditUser = (userId: number) => {
        const { users } = this.state;
        if (userId === 0) {
            this.setState({ editingUser: null, activeDetails: 0 });
        } else {
            const userFound = users.find(user => user.id === userId);
            if (userFound) {
                this.setState({ editingUser: userFound });
            }
        }
    }

    handleDeleteUser = (userId: number) => {
        const { users } = this.state; 
        const indexToRemove = users.findIndex(user => user.id === userId);
        
        if (indexToRemove === -1) return; 

        const updatedUsers = [
            ...users.slice(0, indexToRemove),  
            ...users.slice(indexToRemove + 1) 
        ];
    
        this.setState({ users: updatedUsers });
    }

    render() {
        const { activeMenu, activeDetails, editingUser, users } = this.state;

        return (
            <div>
            <div className={`background ${editingUser !== null ? 'darkened' : ''}`}>
                <NavBar activeButton={2}/>
                <div className="container-fluid d-flex justify-content-center menuContainer">
                    <button className={`my-2 mx-1 btn ${activeMenu === 1 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => this.handleChangeMenu(1)}>
                    Ver clientes</button>

                    <button className={`my-2 mx-1 btn ${activeMenu === 2 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => this.handleChangeMenu(2)}>
                    Cadastrar cliente</button>
                </div>

                {activeMenu === 1 &&
                <div className="container-fluid d-flex justify-content-center">
                    <table className="table table-responsive table-bordered border-primary table-sm m-5 align-middle">
                        <thead>
                            <tr className="">
                                <th scope="col" className="col-1">ID</th>
                                <th scope="col" className="col-6">Nome</th>
                                <th scope="col" className="col-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index)=> (
                                <React.Fragment key={user.id}>
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.nome}</td>
                                        <td className="d-flex justify-content-center">
                                            <button className="btn btn-success table-button-pattern"
                                            onClick={() => this.handleChangeDetails(user.id)}>
                                            {activeDetails === user.id ? 'Ocultar' : 'Detalhes'}</button>
                                        </td>
                                    </tr>
                                    {activeDetails === user.id &&
                                    <tr>
                                        <td colSpan={3} className="p-0">
                                            <table className="table table-responsive table-sm m-0">
                                                <thead></thead>
                                                <tbody>
                                                    <tr className="p-0">
                                                        <td className="col-1"></td>
                                                        <td className="col-6">
                                                            <span className="d-flex flex-column justify-content-between">
                                                                <span><strong>Nome completo: </strong>{user.nome}</span>
                                                                <span><strong>Nome social: </strong>{user.nomeSocial}</span>
                                                                <span><strong>Gênero: </strong>{user.genero}</span>
                                                                <span className="d-none d-sm-flex">
                                                                    <span className="me-4"><strong>CPF: </strong>{user.cpf.valor}</span>
                                                                    <span><strong>Data de emissão: </strong>{user.cpf.dataEmissao.toLocaleDateString('pt-BR')}</span>
                                                                </span>
                                                                <span className="d-flex flex-column d-sm-none">
                                                                    <div><strong>CPF: </strong>{user.cpf.valor}</div>
                                                                    <div><strong>Data de emissão: </strong>{user.cpf.dataEmissao.toLocaleDateString('pt-BR')}</div>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="col-2">
                                                            <span className="d-flex flex-column  align-items-center">
                                                                <button className="btn my-1 btn-info table-button-pattern"
                                                                onClick={() => this.handleEditUser(user.id)}>Editar</button>
                                                                <button className="btn my-1 btn-danger table-button-pattern"
                                                                onClick={() => this.handleDeleteUser(user.id)}>Excluir</button>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>}
            </div>


            {/* div de editar usuário */}
            {editingUser !== null && <div className={`${editingUser !== null ? 'overlay' : ''}`} onClick={() => this.handleEditUser(0)}>
                    <div className="d-flex flex-column m-auto editForm rounded border border-dark overlay-2" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton mx-1" onClick={() => this.handleEditUser(0)}>X</button>
                        <div className="d-flex flex-column mx-auto flex-grow-1">
                            <form action="" className="d-flex flex-column mt-5 col editingForm">
                                    <label htmlFor="">Nome:</label>
                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.nome} 
                                        onChange={(e) => this.setState({ editingUser: { ...editingUser, nome: e.target.value } })}
/>

                                    <label htmlFor="">Nome social:</label>
                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.nomeSocial} 
                                        onChange={(e) => this.setState({ editingUser: { ...editingUser, nomeSocial: e.target.value } })}
/>

                                    <label htmlFor="">Gênero:</label>
                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                    value={editingUser.genero} 
                                    onChange={(e) => this.setState({ editingUser: { ...editingUser, genero: e.target.value } })}
/>

                                    <div className="d-none d-sm-flex flex-column">
                                        <div>
                                            <label htmlFor="" className="w-50 me-2">Número do CPF:</label>
                                            <label htmlFor="">Data de Emissão:</label>
                                        </div>
                                        <div>
                                            <input type="text" className="me-2 border border-2 rounded p-1 px-2"
                                                value={editingUser.cpf.valor} 
                                                onChange={(e) => this.setState({ editingUser: { ...editingUser.cpf, valor: e.target.value } })}
/>
                                            <input type="text" className="ms-2 mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser.cpf.dataEmissao.toLocaleDateString('pt-BR')} 
                                                onChange={(e) => this.setState({ editingUser: { ...editingUser.cpf, dataEmissao: e.target.value } })}
/>
                                        </div>
                                    </div>
                                    <div className="d-flex d-sm-none flex-column">
                                        <label htmlFor="">Número de CPF:</label>
                                        <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.cpf.valor} 
                                        onChange={(e) => this.setState({ editingUser: { ...editingUser.cpf, valor: e.target.value } })}
 />

                                        <label htmlFor="">Data de Emissão</label>
                                        <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.cpf.dataEmissao.toLocaleDateString('pt-BR')} 
                                        onChange={(e) => this.setState({ editingUser: { ...editingUser.cpf, dataEmissao: e.target.value } })}/>
                                    </div>
                            </form>
                            <div className="d-flex justify-content-between align-items mt-4 mb-5">
                                <button className="btn btn-success table-button-pattern" onClick={() => this.handleEditUser(0)}>Salvar</button>
                                <button className="btn btn-warning table-button-pattern" onClick={() => this.handleEditUser(0)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>}

                {activeMenu === 2 && <div className="d-flex container-fluid">
                        <div className="createUserForm mx-auto my-5 p-5 border border-black rounded border-2">
                            <form action="" className="d-flex flex-column">
                                <label htmlFor="" className="fs-4 mb-2">Nome:</label>
                                <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                                <label htmlFor="" className="fs-4 mb-2">Nome Social:</label>
                                <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                                <label htmlFor="" className="fs-4 mb-2">Gênero:</label>
                                <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                                <div className="d-none d-sm-block ">
                                    <div>
                                        <label htmlFor="" className="w-50 me-1 fs-4 mb-2">Número do CPF:</label>
                                        <label htmlFor=""  className="fs-4">Data de Emissão:</label>
                                    </div>
                                    <div>
                                        <input type="text" className="me-2 border border-black border-1 rounded p-1 px-2 fs-5 mb-5"/>
                                        <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5"/>
                                    </div>
                                </div>

                                <div className="d-flex flex-column d-sm-none">
                                    <label htmlFor="" className="fs-4 mb-2">Número do CPF:</label>
                                    <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"/>

                                    <label htmlFor="" className="fs-4 mb-2">Data de Emissão</label>
                                    <input type="text"  className="border border-black border-1 rounded p-1 px-2 fs-5 mb-5"/>
                                </div>
                            </form>
                            <div className="container d-flex justify-content-end p-0">
                                <button className="btn btn-success fs-5">Salvar</button>
                            </div>
                        </div>
                </div>}
        </div>
        )
    }
}

export default ClientPage