# Avaliação Final - Interação Humano Computador 

Nome: Alice Rodrigues Soares | 
Matrícula: 22400343 | 
Curso: Ciência da Computaçãon | 
Polo: Asa norte | 
Data de entrega: 27/06

Este repositório contém as atividades práticas, lógicas e teóricas desenvolvidas para a avaliação final da disciplina. O projeto engloba soluções focadas em **Interação Humano-Computador (IHC)**, **Acessibilidade**, **Design Centrado no Usuário** e desenvolvimento **Back-end/Lógica com TypeScript**.

---

## Estrutura do Repositório

* **`UA1/`** -> Código refatorado do Pop-up de Folha de Pagamento (HTML/CSS).
* **`UA2/`** -> Arquivo de texto contendo as respostas discursivas teóricas da Unidade 2.
* **`UA3/`** -> Arquivo de texto contendo as respostas discursivas teóricas da Unidade 3.
* **`UA4/`** -> Sistema de modelagem de produtos e vendas (TypeScript).

---

## Uso de Inteligência Artificial (IA)

Para o desenvolvimento, refinamento e documentação destas atividades, foi utilizada a Inteligência Artificial **Gemini** de forma assistiva e ética. O uso da tecnologia limitou-se estritamente a:
1. **Correções e validações estruturais** do código-fonte para garantir conformidade com padrões modernos.
2. **Pesquisas pontuais sobre a sintaxe do TypeScript**, assegurando o uso correto de construtores e tipagem estrita de arrays.
3. **Formatação e organização deste arquivo README.md**, gerando uma documentação padronizada, limpa e profissional.

A lógica de negócios, a engenharia de acessibilidade, o design de IHC e a resolução analítica das questões discursivas foram de autoria inteiramente própria.

---

## Detalhes das Unidades de Aprendizagem (UAs)

### UA1 – Introdução a IHC e seus Benefícios
* **Objetivos da Unidade:** Compreender os fundamentos de Interação Humano-Computador (IHC), com foco em navegabilidade, experiência do usuário (UX), prevenção de erros e conformidade visual para sistemas sensíveis (corporativos).
* **O que foi desenvolvido:** * **Análise Crítica de IHC:** Diagnóstico detalhado dos problemas de usabilidade do pop-up do *Sistema de Folha de Pagamento*, apontando falhas de rotulagem (uso de termos ambíguos como "Avançar"), falta de clareza nas consequências da ação e problemas graves de acessibilidade/contraste.
    * **Solução Prática:** Desenvolvimento de uma estrutura limpa e inteligente utilizando **HTML5 Semântico (`<dialog>`) e CSS3**. A interface foi corrigida invertendo o padrão de cores para evitar exclusões acidentais, garantindo alto contraste, foco nativo via teclado para leitores de tela e comandos textuais diretos ("Cancelar" e "Confirmar Exclusão").

### UA2 – Interface, Interação e Affordance
* **Objetivos da Unidade:** Analisar o comportamento do usuário diante de diferentes tipos de interfaces e restrições físicas, mapeando o uso correto de tecnologias assistivas e canais de interação (Voz, Áudio e Tato) que gerem autonomia.
* **O que foi desenvolvido (Resposta Discursiva):**
    * **Proposta de Interface Assistiva:** Resolução de um estudo de caso focado em um gerenciador de cursos voltado para funcionários com deficiência visual.
    * **Solução Proposta:** Definição técnica e conceitual recomendando o uso de **Interfaces de Usuário de Áudio (AUI)** e **Interfaces de Voz (VUI)**. Foi mapeado o ecossistema de hardware e software necessário para a operação, detalhando o papel de leitores de tela (NVDA/JAWS), displays/linhas Braille e periféricos com alta resposta tátil para eliminar barreiras operacionais.

### UA3 – Storyboarding e Prototipação de Interfaces
* **Objetivos da Unidade:** Dominar o processo de Design Centrado no Usuário (DCU) na fase de descoberta de escopo, utilizando técnicas de imersão, cocriação e validação rápida quando o domínio do problema é desconhecido pela equipe de design.
* **O que foi desenvolvido (Resposta Discursiva):**
    * **Plano de Processo de Design:** Estruturação do passo a passo para criar o projeto de uma solução tecnológica de mobilidade urbana para o usuário "Ricardo", que lida com a perda gradativa da visão.
    * **Solução Proposta:** Definição de um fluxo metodológico que envolve as etapas de **Imersão, Levantamento de Requisitos, Ideação e Validação**. Foi defendido o uso prático de ferramentas como *Storytelling*, *Jornada do Usuário* e *Storyboards* para tangibilizar ideias inovadoras (como dispositivos vestíveis e sensores de proximidade integrados a smartwatches) antes da codificação final, minimizando o retrabalho através de protótipos de baixa fidelidade.

### UA4 – TypeScript
* **Objetivos da Unidade:** Aplicar conceitos fundamentais de Programação Orientada a Objetos (POO) utilizando a sintaxe do TypeScript, garantindo tipagem forte, reutilização de código e segurança no fluxo de dados de um e-commerce.
* **O que foi desenvolvido:**
    * **Modelagem de Sistema (E-commerce):** Criação de um protótipo backend/lógica para um site de vendas simulado.
    * **Solução Prática:** Codificação completa contendo a classe `Produto` (composta por 5 atributos obrigatórios inicializados via método construtor) e a classe `Venda`, responsável por encapsular uma coleção de produtos e computar o montante financeiro da transação por meio do método rigorosamente tipado `valorVenda()`. O script demonstra a instanciação dos objetos, injeção de dependência e exibição dos resultados em console.

---

## Como Executar as Atividades Práticas

### 1. Pop-up Acessível (HTML/CSS - Unidade 1)
* **Como rodar:**
    1. Navegue até a pasta `UA1_Popup/` ou copie o código HTML gerado.
    2. Salve o arquivo como `index.html`.
    3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador web (Chrome, Edge, Firefox).
    4. Clique no botão "Simular Exclusão" para visualizar o componente `<dialog>` em funcionamento com foco acessível.

### 2. Sistema de Vendas (TypeScript - Unidade 4)
* **Pré-requisitos:** Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
* **Como rodar:**
    1. Abra o seu terminal na pasta do arquivo (`UA4_VendasTS/`).
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
    *Alternativa rápida:* Se preferir não realizar instalações locais, você pode colar o código diretamente no **[TypeScript Playground](https://www.typescriptlang.org/play)** e clicar em **Run** para ver o resultado do fluxo e da soma diretamente no console web.

---

## Observação sobre as UA2 e UA3

> **Nota de Avaliação:** Os arquivos correspondentes à **Unidade 2 (UA2)** e **Unidade 3 (UA3)** estão entregues no formato `.txt`. Estas unidades solicitavam exclusivamente respostas discursivas e análises teóricas sobre os cenários propostos em aula, **não havendo nenhuma solicitação ou necessidade de desenvolvimento de código-fonte** para ambas.

---

## Considerações Finais:
A realização deste conjunto de desafios proporcionou um entendimento profundo sobre a indissociabilidade entre a engenharia de software e os fatores humanos. O desenvolvimento da UA1 e UA2 consolidou o entendimento prático de que interfaces acessíveis e semânticas não são apenas recursos adicionais, mas sim pilares de usabilidade e responsabilidade técnica que evitam erros operacionais graves.

Na UA3, ficou clara a importância do amadurecimento conceitual e do design centrado na dor do usuário antes de iniciar qualquer linha de desenvolvimento. Por fim, a UA4 permitiu transpor regras de negócios para arquiteturas de código robustas e seguras utilizando os pilares da orientação a objetos e da tipagem estrita do TypeScript.

---

## Declaração de Autoria
Declaro que este trabalho foi desenvolvido por mim, respeitando as normas acadêmicas e de integridade estabelecidas pela instituição.

Nome do Estudante: ALICE RODRIGUES SOARES

Data: 10/06/2026
