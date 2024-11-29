import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import AtualizarCliente from "../servicos/atualizar/atualizarCliente"
import AtualizarProduto from "../servicos/atualizar/atualizarProduto"
import AtualizarServico from "../servicos/atualizar/atualizarServico"
import CadastrarCompra from "../servicos/cadastro/cadastrarCompra"
import CadastroCliente from "../servicos/cadastro/cadastroCliente"
import CadastroProduto from "../servicos/cadastro/cadastroProduto"
import CadastroServico from "../servicos/cadastro/cadastroServico"
import DeletarClientes from "../servicos/deletar/deletarCliente"
import DeletarCompra from "../servicos/deletar/deletarCompra"
import DeletarProduto from "../servicos/deletar/deletarProduto"
import DeletarServico from "../servicos/deletar/deletarServico"
import InserirClientes from "../servicos/inserirClientes"
import InserirProdutos from "../servicos/inserirProdutos"
import InserirServicos from "../servicos/inserirServicos"
import ListagemCliente from "../servicos/listar/listagemCliente"
import ListagemProduto from "../servicos/listar/listagemProduto"
import ListagemServico from "../servicos/listar/listagemServico"

console.log('Cadastro de clientes do Grupo World Beauty')

let empresa = new Empresa()

let insercaoClientes = new InserirClientes(empresa.getClientes)
insercaoClientes.inserir()

let insercaoProdutos = new InserirProdutos(empresa.getProdutos)
insercaoProdutos.inserir()

let insercaoServicos = new InserirServicos(empresa.getServicos)
insercaoServicos.inserir()

let inserirCompras = new CadastrarCompra(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
inserirCompras.inserir()

let execucao = true
while (execucao){
    console.log('Opções:')
    console.log('1 - Cadastrar cliente')
    console.log('2 - Atualizar cliente')
    console.log('3 - Deletar cliente')
    console.log('4 - Cadastrar produto')
    console.log('5 - Atualizar produto')
    console.log('6 - Deletar produto')
    console.log('7 - Cadastrar serviço')
    console.log('8 - Atualizar serviço')
    console.log('9 - Deletar serviço')
    console.log('10 - Registrar compra')
    console.log('11 - Deletar compra')
    console.log('12 - Listagem de clientes')
    console.log('13 - Listagem de produtos')
    console.log('14 - Listagem de serviços')
    console.log('0 - Sair\n')

    const entrada = new Entrada()
    let opcao = entrada.receberNumero('Escolha uma opção: ')

    switch (opcao){
        case (1):
            let cadastrarCliente = new CadastroCliente(empresa.getClientes)
            cadastrarCliente.cadastrar()
            break
        case (2):
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break
        case (3):
            let deletarCliente = new DeletarClientes(empresa.getClientes)
            deletarCliente.deletar()
            break
        case (4):
            let cadastrarProduto = new CadastroProduto(empresa.getProdutos)
            cadastrarProduto.cadastrar()
            break
        case (5):
            let atualizarProduto = new AtualizarProduto(empresa.getClientes, empresa.getProdutos)
            atualizarProduto.atualizar()
            break
        case (6):
            let deletarProduto = new DeletarProduto(empresa.getClientes, empresa.getProdutos)
            deletarProduto.deletar()
            break
        case (7):
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break
        case (8):
            let atualizarServico = new AtualizarServico(empresa.getClientes, empresa.getServicos)
            atualizarServico.atualizar()
            break
        case (9):
            let deletarServico = new DeletarServico(empresa.getClientes, empresa.getServicos)
            deletarServico.deletar()
            break
        case (10):
            let cadastrarCompra = new CadastrarCompra(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastrarCompra.cadastrar()
            break
        case(11):
            let deletarCompra = new DeletarCompra(empresa.getClientes)
            deletarCompra.deletar()
            break
        case (12):
            console.log('Escolha a forma que quer listar:')
            console.log('1 - Todos os clientes')
            console.log('2 - Clientes que mais consumiram produtos (quantidade)')
            console.log('3 - Clientes por gênero')
            console.log('4 - Clientes que menos consumiram (quantidade)')
            console.log('5 - Clientes que mais gastaram')
            console.log('0 - Voltar\n')
            
            let opcao_cliente = entrada.receberNumero('Escolha uma opção: ')
            let listarClientes = new ListagemCliente(empresa.getClientes)

            switch(opcao_cliente){
                case (1):
                    listarClientes.listar()
                    break
                case (2):
                    listarClientes.listarMaisCompras('mais')
                    break
                case (3):
                    listarClientes.listarGenero()
                    break
                case (4):
                    listarClientes.listarMaisCompras('menos')
                    break
                case (5):
                    listarClientes.listarMaisGasto()
                    break
                case (0):
                    break
            }
            break
        case (13):
            console.log('Escolha a forma que quer listar')
            console.log('1 - Listar todos os produtos')
            console.log('2 - Listar os produtos mais consumidos por gênero')
            console.log('0 - Voltar\n')

            let opcao_produto = entrada.receberNumero('Escolha uma opção: ')
            let listarProdutos = new ListagemProduto(empresa.getClientes, empresa.getProdutos)
            switch (opcao_produto){
                case (1):
                    listarProdutos.listar()
                    break
                case (2):
                    listarProdutos.listarGenero()
                    break
                case (0):
                    break
            }

            break
        case (14):
            console.log('Escolha a forma que quer listar')
            console.log('1 - Listar todos os serviços')
            console.log('2 - Listar os serviços mais consumidos por gênero')
            console.log('0 - Voltar\n')

            let opcao_servico = entrada.receberNumero('Escolha uma opção: ')
            let listarServicos = new ListagemServico(empresa.getClientes, empresa.getServicos)
            switch (opcao_servico){
                case (1):
                    listarServicos.listar()
                case (2):
                    listarServicos.listarGenero()
                case (0):
                    break
            }
            break
        case (0):
            execucao = false
    }
}
