import React, { useEffect, useState } from "react";
import { NavBar } from "../../components/navBar/navBar";
import './clientsPage.css'
import { createUser, deleteUser, listAllUsers, listOneUser, updateUser } from "./api";

interface Link {
    rel: string;
    href: string;
}

interface Endereco {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
    links: Link[];
}

interface Telefone {
    id: number;
    ddd: string;
    numero: string;
    links: Link[];
}

interface User {
    id: number;
    nome: string;
    sobreNome: string;
    endereco: Endereco;
    telefones: Telefone[]
    links: Link[]
}

export function ClientPage() {
    const [activeMenu, setActiveMenu] = useState(1)
    const [activeDetails, setActiveDetails] = useState(0)
    const [editingUser, setEditingUser] = useState<User | null>(null)
    const [creatingUser, setCreatingUser] = useState<User>({
        id: 0,
        nome: '',
        sobreNome: '',
        endereco: {
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            informacoesAdicionais: '',
            links: []
        },
        telefones: [{
            id: 0,
            ddd: '',
            numero: '',
            links: []
        }],
        links: []
    })

    const [users, setUsers] = useState<User[]>([])
    

    const handleChangeMenu = (newNumber: number) => {
        setActiveMenu(newNumber)
    }

    const handleChangeDetails = (userId: number) => {
        if (activeDetails === userId) {
            setActiveDetails(0)
        }else {
            setActiveDetails(userId)
        }   
    }

    const loadUsers = async () => {
        try {
            const users = await listAllUsers()
            if (users.length > 1){
                setUsers(users)
            }
        } catch (error) {
            console.error('Erro ao carregar usuários: ', error)
        }
    }

    const handleEditUser = async (userId: number) => {
        if (userId === 0) {
            setEditingUser(null)
            setActiveDetails(0)
            return
        }

        const userFound = await listOneUser(userId)

        if (userFound){
            setEditingUser(userFound)
        }
    }

    const handleSaveUser = async (user: User, action: number) => {

        if (user) {
            if (action === 1){
                await createUser(user)
                setCreatingUser({
                    id: 0,
                    nome: '',
                    sobreNome: '',
                    endereco: {
                        estado: '',
                        cidade: '',
                        bairro: '',
                        rua: '',
                        numero: '',
                        codigoPostal: '',
                        informacoesAdicionais: '',
                        links: []
                    },
                    telefones: [{
                        id: 0,
                        ddd: '',
                        numero: '',
                        links: []
                    }],
                    links: []
                })

            } else {
                await updateUser(user)
                handleEditUser(0)
            }
            loadUsers()
            setActiveMenu(1) 
        }
        
    }

    const handleDeleteUser = async(userId: number) => {
        const response = await deleteUser(userId)
        loadUsers()
    }


    const handleAddTelefone = () => {
        const newTelefone: Telefone = {
            id: Date.now(),
            ddd: '',
            numero: '',
            links: []
        };
        setCreatingUser({
            ...creatingUser,
            telefones: [...creatingUser.telefones, newTelefone]
        });
    };


    const handleRemoveTelefone = (index: number) => {
        const updatedTelefones = creatingUser.telefones.filter((_, i) => i !== index);
        setCreatingUser({
            ...creatingUser,
            telefones: updatedTelefones
        });
    };


    useEffect(() => {
        if (users.length <= 0){
            loadUsers()
        }
        
    }, [activeMenu])
 
    return(
        <div>
            <div className={`background ${editingUser !== null ? 'darkened' : ''}`}>
                <NavBar activeButton={2}/>
                <div className="container-fluid d-flex justify-content-center menuContainer">
                    <button className={`my-2 mx-1 btn ${activeMenu === 1 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(1)}>
                    Ver clientes</button>

                    <button className={`my-2 mx-1 btn ${activeMenu === 2 ? 'btn-light' : 'btn-outline-light'}`}
                    onClick={() => handleChangeMenu(2)}>
                    Cadastrar cliente</button>
                </div>

                {activeMenu === 1 &&
                <div className="container-fluid d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column">
                    </div>
                    <table className="table table-responsive table-bordered border-primary table-sm my-5 align-middle">
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
                                            onClick={() => handleChangeDetails(user.id)}>
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
                                                                <span><strong>Nome: </strong>{user.nome}</span>
                                                                <span><strong>Sobre Nome: </strong>{user.sobreNome}</span>
                                                                <span><strong>Estado: </strong>{user.endereco.estado}</span>
                                                                <span><strong>Cidade: </strong>{user.endereco.cidade}</span>
                                                                <span><strong>Bairro: </strong>{user.endereco.bairro}</span>
                                                                <span><strong>Rua: </strong>{user.endereco.rua}</span>
                                                                <span><strong>Número: </strong>{user.endereco.numero}</span>
                                                                <span><strong>Código Postal: </strong>{user.endereco.codigoPostal}</span>
                                                                <span><strong>Informações adicionais: </strong>{user.endereco.informacoesAdicionais}</span>
                                                                {user.telefones.map((telefone, index) => (
                                                                    <span key={user.id}><strong>Telefone {index + 1}: </strong>({telefone.ddd}) {telefone.numero}</span>
                                                                ))}
                                                            </span>
                                                        </td>
                                                        <td className="col-2">
                                                            <span className="d-flex flex-column  align-items-center">
                                                                <button className="btn my-1 btn-info table-button-pattern"
                                                                onClick={() => handleEditUser(user.id)}>Editar</button>
                                                                <button className="btn my-1 btn-danger table-button-pattern"
                                                                onClick={() => handleDeleteUser(user.id)}>Excluir</button>
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
            {editingUser !== null && <div className={`${editingUser !== null ? 'overlay' : ''}`} onClick={() => handleEditUser(0)}>
                    <div className="d-flex flex-column m-auto editForm rounded border border-dark overlay-2" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton mx-1" onClick={() => handleEditUser(0)}>X</button>
                        <div className="d-flex flex-column mx-auto flex-grow-1 px-5 py-3">
                            <form action="" className="d-flex flex-column mt-5 col editingForm">
                                    <label htmlFor="">Nome:</label>
                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.nome} 
                                        onChange={(e) => setEditingUser({...editingUser, nome: e.target.value})}/>

                                    <label htmlFor="">Sobrenome:</label>
                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                        value={editingUser.sobreNome} 
                                        onChange={(e) => setEditingUser({...editingUser, sobreNome: e.target.value})}/>

                                    <div className="d-none flex-column d-sm-flex">
                                        <div className="d-flex row row-cols-4">
                                            <label htmlFor="" className="col-4">Estado:</label>
                                            <label htmlFor="" className="">Cidade:</label>
                                        </div>
                                        <div>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2 me-2"
                                                value={editingUser?.endereco.estado} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        estado: e.target.value
                                                    }
                                                })}/>

                                        
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.cidade} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        cidade: e.target.value
                                                    }
                                                })}/>
                                        </div>
                                        
                                        <label htmlFor="">Bairro:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.bairro} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        bairro: e.target.value
                                                    }
                                                })}/>

                                        <div className="d-flex row row-cols-3">
                                            <label htmlFor="" className="col-5 me-3">Rua:</label>
                                            <label htmlFor="" className="col-2 me-3">Número:</label>
                                            <label htmlFor="" className="col">Cód. Postal:</label>
                                        </div>

                                        <div className="d-flex row row-cols-3 justify-content-between pe-3 ps-1">
                                            <input type="text" className="ms-2 mb-3 border border-2 rounded p-1 px-2 col-5 me-1"
                                                    value={editingUser?.endereco.rua} 
                                                    onChange={(e) => setEditingUser({
                                                        ...editingUser,
                                                        endereco: {
                                                            ...editingUser.endereco,
                                                            rua: e.target.value
                                                        }
                                                    })}/>

                                        
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2 col-2 me-1"
                                                value={editingUser?.endereco.numero} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        numero: e.target.value
                                                    }
                                                })}/>

                                        
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2 col"
                                                value={editingUser?.endereco.codigoPostal} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        codigoPostal: e.target.value
                                                    }
                                                })}/>
                                        </div>

                                        <label htmlFor="">Informações Adicionais:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.informacoesAdicionais} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        informacoesAdicionais: e.target.value
                                                    }
                                                })}/>

                                        {editingUser?.telefones.map((telefone, index) => (
                                                <div key={index} className="d-flex flex-column">
                                                    <label htmlFor="">Telefone {index + 1}:</label>
                                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2 phoneInput"
                                                        value={telefone.numero} 
                                                        onChange={(e) => setEditingUser({
                                                            ...editingUser,
                                                            telefones: editingUser.telefones.map(t => 
                                                                t.id === telefone.id ? {...t, numero: e.target.value} : t
                                                            )
                                                        })}/>
                                                </div>
                                            ))}
                                    </div>

                                    <div className="d-flex flex-column d-sm-none">
                                        <label htmlFor="">Estado:</label>
                                        <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                            value={editingUser?.endereco.estado} 
                                            onChange={(e) => setEditingUser({
                                                ...editingUser,
                                                endereco: {
                                                    ...editingUser.endereco,
                                                    estado: e.target.value
                                                }
                                            })}/>

                                        <label htmlFor="">Cidade:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.cidade} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        cidade: e.target.value
                                                    }
                                                })}/>

                                        <label htmlFor="">Bairro:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.bairro} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        bairro: e.target.value
                                                    }
                                                })}/>

                                        <label htmlFor="">Rua:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.rua} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        rua: e.target.value
                                                    }
                                                })}/>

                                        <label htmlFor="">Número:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.numero} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        numero: e.target.value
                                                    }
                                                })}/>

                                        <label htmlFor="">Código Postal:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.codigoPostal} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        codigoPostal: e.target.value
                                                    }
                                                })}/>

                                        <label htmlFor="">Informações Adicionais:</label>
                                            <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                value={editingUser?.endereco.informacoesAdicionais} 
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    endereco: {
                                                        ...editingUser.endereco,
                                                        informacoesAdicionais: e.target.value
                                                    }
                                                })}/>

                                        {editingUser?.telefones.map((telefone, index) => (
                                                <div key={index + 1} className="d-flex flex-column">
                                                    <label htmlFor="">Telefone {index + 1}:</label>
                                                    <input type="text" className="mb-3 border border-2 rounded p-1 px-2"
                                                        value={telefone.numero} 
                                                        onChange={(e) => setEditingUser({
                                                            ...editingUser,
                                                            telefones: editingUser.telefones.map(t => 
                                                                t.id === telefone.id ? {...t, numero: e.target.value} : t
                                                            )
                                                        })}/>
                                                </div>
                                            ))}
                                    </div>
                            </form>
                            <div className="d-flex justify-content-between align-items mt-4 mb-5">
                                <button className="btn btn-success table-button-pattern" onClick={() => handleSaveUser(editingUser, 2)}>Salvar</button>
                                <button className="btn btn-warning table-button-pattern" onClick={() => handleEditUser(0)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>}

                {activeMenu === 2 && <div className="d-flex container-fluid">
                        <div className="createUserForm mx-auto my-5 p-5 border border-black rounded border-2">
                        <form action="" className="d-flex flex-column">
                            <label htmlFor="" className="fs-4 mb-2">Nome:</label>
                            <input
                                type="text"
                                className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                value={creatingUser.nome}
                                onChange={(e) => setCreatingUser({ ...creatingUser, nome: e.target.value })}
                            />

                            <label htmlFor="" className="fs-4 mb-2">Sobrenome:</label>
                            <input
                                type="text"
                                className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                value={creatingUser.sobreNome}
                                onChange={(e) => setCreatingUser({ ...creatingUser, sobreNome: e.target.value })}
                            />

                            <div className="d-flex flex-column d-sm-none">
                                <label htmlFor="" className="fs-4 mb-2">Estado:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.estado}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, estado: e.target.value }
                                    })}
                                />

                                <label htmlFor="" className="fs-4 mb-2">Cidade:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.cidade}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, cidade: e.target.value }
                                    })}
                                />

                                <label htmlFor="" className="fs-4 mb-2">Bairro:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.bairro}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, bairro: e.target.value }
                                    })}
                                />

                                <label htmlFor="" className="fs-4 mb-2">Rua:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.rua}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, rua: e.target.value }
                                    })}
                                />

                                <label htmlFor="" className="fs-4 mb-2">Número:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.numero}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, numero: e.target.value }
                                    })}
                                />

                                <label htmlFor="" className="fs-4 mb-2">Código Postal:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.codigoPostal}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, codigoPostal: e.target.value }
                                    })}
                                />
                            </div>

                                <div className="d-none flex-column d-sm-flex">
                                        <div className="d-flex row row-cols-4">
                                            <label htmlFor="" className="col-4">Estado:</label>
                                            <label htmlFor="" className="">Cidade:</label>
                                        </div>
                                        <div>
                                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4 me-3"
                                                />

                                        
                                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                                />
                                        </div>
                                        
                                        <label htmlFor="">Bairro:</label>
                                            <input type="text" className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                                />

                                        <div className="d-flex row row-cols-3">
                                            <label htmlFor="" className="col- me-3">Rua:</label>
                                            <label htmlFor="" className="col-1 me-3">Número:</label>
                                            <label htmlFor="" className="col-2">Cód. Postal:</label>
                                        </div>

                                        <div className="d-flex row row-cols-3 pe-3 ps-1 ps-2">
                                            <input type="text" className=" col-4 border border-black border-1 rounded p-1 px-2 fs-5 mb-4 me-4"
                                                    />

                                        
                                            <input type="text" className="col-1 border border-black border-1 rounded p-1 px-2 fs-5 mb-4 me-4"
                                                />

                                        
                                            <input type="text" className=" col-2 border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                                />
                                        </div>
                                    </div>

                                <label htmlFor="" className="fs-4 mb-2">Informações Adicionais:</label>
                                <input
                                    type="text"
                                    className="border border-black border-1 rounded p-1 px-2 fs-5 mb-4"
                                    value={creatingUser.endereco.informacoesAdicionais}
                                    onChange={(e) => setCreatingUser({
                                        ...creatingUser,
                                        endereco: { ...creatingUser.endereco, informacoesAdicionais: e.target.value }
                                    })}
                                />

                                <div className="d-flex flex-column">
                                    {creatingUser.telefones.map((telefone, index) => (
                                        <div key={index} className="d-flex flex-column mb-4">
                                            <label htmlFor={`ddd-${index}`} className="fs-4 mb-2">DDD:</label>
                                            <input
                                                type="text"
                                                id={`ddd-${index}`}
                                                className="border border-black border-1 rounded p-1 px-2 fs-5 mb-2 col-2"
                                                value={telefone.ddd}
                                                onChange={(e) => {
                                                    const updatedTelefones = [...creatingUser.telefones];
                                                    updatedTelefones[index].ddd = e.target.value;
                                                    setCreatingUser({ ...creatingUser, telefones: updatedTelefones });
                                                }}
                                            />

                                            <label htmlFor={`numero-${index}`} className="fs-4 mb-2">Número:</label>
                                            <input
                                                type="text"
                                                id={`numero-${index}`}
                                                className="border border-black border-1 rounded p-1 px-2 fs-5 mb-2 col-3"
                                                value={telefone.numero}
                                                onChange={(e) => {
                                                    const updatedTelefones = [...creatingUser.telefones];
                                                    updatedTelefones[index].numero = e.target.value;
                                                    setCreatingUser({ ...creatingUser, telefones: updatedTelefones });
                                                }}
                                            />

                                            {creatingUser.telefones.length > 1 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger fs-5"
                                                    onClick={() => handleRemoveTelefone(index)}
                                                >
                                                    Remover Telefone
                                                </button>
                                            )}
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        className="btn btn-primary fs-5 mb-4"
                                        onClick={handleAddTelefone}
                                    >
                                        Adicionar Telefone
                                    </button>
                            </div>
                        </form>
                            <div className="container d-flex justify-content-end p-0">
                                <button className="btn btn-success fs-5" onClick={() => handleSaveUser(creatingUser, 1)}>Cadastrar</button>
                            </div>
                        </div>
                </div>}
        </div>
    )
}