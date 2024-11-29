"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var atualizarCliente_1 = __importDefault(require("../servicos/atualizar/atualizarCliente"));
var atualizarProduto_1 = __importDefault(require("../servicos/atualizar/atualizarProduto"));
var atualizarServico_1 = __importDefault(require("../servicos/atualizar/atualizarServico"));
var cadastrarCompra_1 = __importDefault(require("../servicos/cadastro/cadastrarCompra"));
var cadastroCliente_1 = __importDefault(require("../servicos/cadastro/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../servicos/cadastro/cadastroProduto"));
var cadastroServico_1 = __importDefault(require("../servicos/cadastro/cadastroServico"));
var deletarCliente_1 = __importDefault(require("../servicos/deletar/deletarCliente"));
var deletarCompra_1 = __importDefault(require("../servicos/deletar/deletarCompra"));
var deletarProduto_1 = __importDefault(require("../servicos/deletar/deletarProduto"));
var deletarServico_1 = __importDefault(require("../servicos/deletar/deletarServico"));
var inserirClientes_1 = __importDefault(require("../servicos/inserirClientes"));
var inserirProdutos_1 = __importDefault(require("../servicos/inserirProdutos"));
var inserirServicos_1 = __importDefault(require("../servicos/inserirServicos"));
var listagemCliente_1 = __importDefault(require("../servicos/listar/listagemCliente"));
var listagemProduto_1 = __importDefault(require("../servicos/listar/listagemProduto"));
var listagemServico_1 = __importDefault(require("../servicos/listar/listagemServico"));
console.log('Cadastro de clientes do Grupo World Beauty');
var empresa = new empresa_1.default();
var insercaoClientes = new inserirClientes_1.default(empresa.getClientes);
insercaoClientes.inserir();
var insercaoProdutos = new inserirProdutos_1.default(empresa.getProdutos);
insercaoProdutos.inserir();
var insercaoServicos = new inserirServicos_1.default(empresa.getServicos);
insercaoServicos.inserir();
var inserirCompras = new cadastrarCompra_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
inserirCompras.inserir();
var execucao = true;
while (execucao) {
    console.log('Opções:');
    console.log('1 - Cadastrar cliente');
    console.log('2 - Atualizar cliente');
    console.log('3 - Deletar cliente');
    console.log('4 - Cadastrar produto');
    console.log('5 - Atualizar produto');
    console.log('6 - Deletar produto');
    console.log('7 - Cadastrar serviço');
    console.log('8 - Atualizar serviço');
    console.log('9 - Deletar serviço');
    console.log('10 - Registrar compra');
    console.log('11 - Deletar compra');
    console.log('12 - Listagem de clientes');
    console.log('13 - Listagem de produtos');
    console.log('14 - Listagem de serviços');
    console.log('0 - Sair\n');
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero('Escolha uma opção: ');
    switch (opcao) {
        case (1):
            var cadastrarCliente = new cadastroCliente_1.default(empresa.getClientes);
            cadastrarCliente.cadastrar();
            break;
        case (2):
            var atualizarCliente = new atualizarCliente_1.default(empresa.getClientes);
            atualizarCliente.atualizar();
            break;
        case (3):
            var deletarCliente = new deletarCliente_1.default(empresa.getClientes);
            deletarCliente.deletar();
            break;
        case (4):
            var cadastrarProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;
        case (5):
            var atualizarProduto = new atualizarProduto_1.default(empresa.getClientes, empresa.getProdutos);
            atualizarProduto.atualizar();
            break;
        case (6):
            var deletarProduto = new deletarProduto_1.default(empresa.getClientes, empresa.getProdutos);
            deletarProduto.deletar();
            break;
        case (7):
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case (8):
            var atualizarServico = new atualizarServico_1.default(empresa.getClientes, empresa.getServicos);
            atualizarServico.atualizar();
            break;
        case (9):
            var deletarServico = new deletarServico_1.default(empresa.getClientes, empresa.getServicos);
            deletarServico.deletar();
            break;
        case (10):
            var cadastrarCompra = new cadastrarCompra_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastrarCompra.cadastrar();
            break;
        case (11):
            var deletarCompra = new deletarCompra_1.default(empresa.getClientes);
            deletarCompra.deletar();
            break;
        case (12):
            console.log('Escolha a forma que quer listar:');
            console.log('1 - Todos os clientes');
            console.log('2 - Clientes que mais consumiram produtos (quantidade)');
            console.log('3 - Clientes por gênero');
            console.log('4 - Clientes que menos consumiram (quantidade)');
            console.log('5 - Clientes que mais gastaram');
            console.log('0 - Voltar\n');
            var opcao_cliente = entrada.receberNumero('Escolha uma opção: ');
            var listarClientes = new listagemCliente_1.default(empresa.getClientes);
            switch (opcao_cliente) {
                case (1):
                    listarClientes.listar();
                    break;
                case (2):
                    listarClientes.listarMaisCompras('mais');
                    break;
                case (3):
                    listarClientes.listarGenero();
                    break;
                case (4):
                    listarClientes.listarMaisCompras('menos');
                    break;
                case (5):
                    listarClientes.listarMaisGasto();
                    break;
                case (0):
                    break;
            }
            break;
        case (13):
            console.log('Escolha a forma que quer listar');
            console.log('1 - Listar todos os produtos');
            console.log('2 - Listar os produtos mais consumidos por gênero');
            console.log('0 - Voltar\n');
            var opcao_produto = entrada.receberNumero('Escolha uma opção: ');
            var listarProdutos = new listagemProduto_1.default(empresa.getClientes, empresa.getProdutos);
            switch (opcao_produto) {
                case (1):
                    listarProdutos.listar();
                    break;
                case (2):
                    listarProdutos.listarGenero();
                    break;
                case (0):
                    break;
            }
            break;
        case (14):
            console.log('Escolha a forma que quer listar');
            console.log('1 - Listar todos os serviços');
            console.log('2 - Listar os serviços mais consumidos por gênero');
            console.log('0 - Voltar\n');
            var opcao_servico = entrada.receberNumero('Escolha uma opção: ');
            var listarServicos = new listagemServico_1.default(empresa.getClientes, empresa.getServicos);
            switch (opcao_servico) {
                case (1):
                    listarServicos.listar();
                case (2):
                    listarServicos.listarGenero();
                case (0):
                    break;
            }
            break;
        case (0):
            execucao = false;
    }
}
