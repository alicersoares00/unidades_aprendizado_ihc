/**
 * ITEM A) Classe que representa a estrutura de um Produto
 */
class Produto {
    // Definição dos tipos dos 5 atributos obrigatórios
    id: number;
    nome: string;
    descricao: string;
    valor: number; // Alterado de 'preco' para 'valor' para seguir estritamente o enunciado
    fabricante: string;

    // O construtor permite inicializar o produto com dados válidos logo na sua criação
    constructor(id: number, nome: string, descricao: string, valor: number, fabricante: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.fabricante = fabricante;
    }
}

/**
 * ITEM B) Classe que gerencia a Venda e o agrupamento de produtos
 */
class Venda {
    // Atributo que armazena a lista/array de produtos desta venda
    produtos: Produto[];

    // O construtor recebe o array de produtos no momento em que a venda é aberta
    constructor(produtos: Produto[]) {
        this.produtos = produtos;
    }

    /**
     * Método responsável por iterar sobre os produtos e somar seus valores.
     * Nomeado como 'valorVenda' para coincidir com o protótipo exigido.
     */
    valorVenda(): number {
        let soma = 0;

        // Loop "for...of" para percorrer cada produto dentro do array
        for (let produto of this.produtos) {
            soma += produto.valor; // Acumula o valor do produto atual na variável 'soma'
        }

        return soma; // Retorna o valor final somado
    }
}

/**
 * ITEM C) Instanciação dos objetos e execução do fluxo de soma
 */

// Instanciando o Produto 1 com o construtor correto
const produto1 = new Produto(
    1,
    "Cadeira Gamer",
    "Cadeira ergonômica para escritório",
    1200.00,
    "DXRacer"
);

// Instanciando o Produto 2 com o construtor correto
const produto2 = new Produto(
    2,
    "Mesa de Escritório",
    "Mesa de madeira para computador",
    800.00,
    "Flexform"
);

// Criando o objeto da classe Venda e injetando o array com os 2 produtos criados
const venda = new Venda([produto1, produto2]);

// Executando o método de soma e armazenando o resultado
const totalVenda = venda.valorVenda();

// Exibindo o resultado final esperado no console
console.log("O valor total da venda é: R$ " + totalVenda);