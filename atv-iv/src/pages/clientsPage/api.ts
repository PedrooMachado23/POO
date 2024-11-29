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

export async function createUser(user: User): Promise<void> {
    try{
        const response = await fetch('http://localhost:32832/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    } catch (error) {
        console.error(`Erro ao cadastrar usuário`)
    }
}

export async function updateUser(user: User): Promise<void> {
    try{
        const response = await fetch('http://localhost:32832/cliente/atualizar', {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
    } catch (erro) {
        console.error(`Erro ao alterar usuário`)
    }
}

export async function deleteUser(userId: number): Promise<void> {
   try {
        const response = await fetch('http://localhost:32832/cliente/excluir', {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ id: userId })
        })
    } catch (error) {
        console.error(`Erro ao deletar usuário: `, error)
    }
}

export async function listAllUsers(): Promise<User[]> {
    try {
            const response = await fetch('http://localhost:32832/clientes', {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
        const dados: User[] = await response.json()

        return dados

    }   catch (error) {
        console.error(`Erro ao buscar dados: `, error)
        throw error
    }
}

export async function listOneUser(userId: number): Promise<User> {
    try {
        const response = await fetch(`http://localhost:32832/cliente/${userId}`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })

        const userFound: User = await response.json()

        return userFound
    } catch (error) {
        console.error(`Erro ao buscar dado de um usuário: `, error)
        throw error
    }
}