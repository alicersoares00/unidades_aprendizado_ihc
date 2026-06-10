# Avaliação Final - Interação Humano - Computador

Este repositório contém as atividades práticas e teóricas desenvolvidas para a avaliação final da disciplina. O projeto engloba soluções em **Front-end (HTML/CSS semântico e acessível)** e **Back-end/Lógica (TypeScript)**.

---

## Estrutura do Repositório

* **`UA1_Popup/`** -> Código refatorado do Pop-up de Folha de Pagamento (HTML/CSS).
* **`UA2_Respostas.txt`** -> Arquivo de texto contendo as respostas discursivas teóricas da Unidade 2 (Não solicitava código).
* **`UA3_Respostas.txt`** -> Arquivo de texto contendo as respostas discursivas teóricas da Unidade 3 (Não solicitava código).
* **`UA4_VendasTS/`** -> Sistema de modelagem de produtos e vendas (TypeScript).

---

## Uso de Inteligência Artificial (IA)

Para o desenvolvimento e refinamento destas atividades, foi utilizada a Inteligência Artificial **Gemini** de forma assistiva e ética. O uso da tecnologia limitou-se estritamente a:
1. **Correções e validações estruturais** do código-fonte.
2. **Pesquisas pontuais sobre a sintaxe do TypeScript**, garantindo o uso de boas práticas modernas (como a estruturação de construtores e tipagem de arrays).
3. **Formatação e organização do próprio arquivo README.md**, gerando uma documentação limpa, padronizada e profissional para o repositório.

A lógica de negócios, engenharia do design e a resolução das questões discursivas foram de autoria inteiramente própria.

---

## Como Executar as Atividades Práticas

Abaixo estão as instruções para rodar os dois códigos presentes nesta avaliação:

### 1. Pop-up Acessível (HTML/CSS - Unidade 1)
Esta atividade consistia em transformar uma imagem de folha de pagamento em uma interface semântica, acessível e com UX inteligente.

* **Como rodar:**
    1. Navegue até a pasta do arquivo ou copie o código HTML.
    2. Salve o arquivo como `index.html`.
    3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador web (Chrome, Edge, Firefox).
    4. Clique no botão "Simular Exclusão" para visualizar o componente `<dialog>` em funcionamento.

### 2. Sistema de Vendas (TypeScript - Unidade 4)
Esta atividade exigia a criação das classes `Produto` e `Venda` com tipagem forte e métodos de soma.

* **Pré-requisitos:** Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
* **Como rodar:**
    1. Abra o seu terminal na pasta do arquivo (ex: `UA4_VendasTS/`).
    2. Instale o compilador do TypeScript globalmente (caso não tenha):
       ```bash
       npm install -g typescript
       ```
    3. Compile o arquivo TypeScript (`.ts`) para JavaScript (`.js`):
       ```bash
       tsc index.ts
       ```
    4. Execute o arquivo compilado utilizando o Node.js:
       ```bash
       node index.js
       ```
    *Alternativa rápida:* Se preferir não instalar nada localmente, você pode colar o código diretamente no **[TypeScript Playground](https://www.typescriptlang.org/play)** e clicar em **Run** para ver o resultado no console web.

---

## Observação sobre as UA2 e UA3

>  **Nota de Avaliação:** Os arquivos correspondentes à **Unidade 2 (UA2)** e **Unidade 3 (UA3)** estão entregues no formato `.txt`. Estas unidades solicitavam exclusivamente respostas discursivas e teóricas sobre os conceitos abordados em aula, **não havendo nenhuma solicitação ou necessidade de desenvolvimento de código-fonte** para ambas.
