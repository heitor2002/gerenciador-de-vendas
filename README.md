# Sistema de Gerenciamento de Vendas

https://github.com/heitor2002/gerenciador-de-vendas/blob/main/LICENSE

## Sobre o projeto

Visando atender pequenos revendedores, o projeto foi criado como uma forma de administrar um pequeno negócio. Este sistema manipula dados e os apresenta de maneira agradável na tela do vendedor, fazendo com que o mesmo tenha seu tempo otimizado devido à automatização do processo administrativo.

Além de possuir um visual simples e intuitivo, todas as instruções de uso são apresentadas na página inicial. O vendedor possui um menu com acesso a seis telas com as suas respectivas ramificações;

### Home:

- Apresenta as instruções para o uso do sistema,

### Vendas:

- Apresenta os clientes disponíveis para que seja selecionado o respectivo cliente da realização da venda,

### Pedidos:

- Quando se faz o pedido da fábrica, nesta página o vendedor ficará responsável por cadastrar cada pedido, para que assim os produtos comprados possam ser direcionados para o estoque e o valor do pedido seja armazenado,

### Clientes:

- Nesta página o vendedor tem acesso a todos os clientes cadastrados, e nela também é feito o cadastro de um novo cliente. Os cartões dos clientes possuem um botão de visualizar, e este botão direciona o vendedor para uma página individual do cliente, com informações detalhadas do mesmo. Nesta página o vendedor também registra o pagamento realizado pelo respectivo cliente.

### Estoque:

- Todos os produtos cadastrados em "Pedidos" serão direcionados para o estoque, e nele permanecerão até que o respectivo produto seja vendido ou excluido na página de pedidos. O estoque apresenta apenas o nome do produto, a quantidade disponível e o valor por unidade do produto.

### Desempenho:

- Aqui é possível analisar o próprio desempenho de vendas, com informações minuciosas sobre gastos e ganhos do vendedor.

## Inicialização do projeto

<p>A ferramenta de construção utilizada no projeto foi o Vite, sendo que este foi programado em ReactJS. Além disso, para que o projeto seja executado, algumas bibliotecas e dependências precisam ser instaladas.</p>

### Com o Node instalado na máquina, abriremos o projeto e faremos as seguintes instalações utilizando o terminal:

- JSON-SERVER:
- React-router-dom:
- React-icons:

> npm install -g json-server

> npm install react-router-dom

> npm install react-icons --save

Instalada as dependências, é necessário ligar os dados do json-server que se encontram na pasta data. Todos os dados se encontram em uma mesma porta (porta 3000), com excessão dos dados do estoque que foram configurados para ficar na porta 5000.

### Ligaremos os servidores utilizando dois terminais:

#### No primeiro:

> json-server --w data/db.json --port 3000

#### No segundo:

> json-server --w data/stock.json --port 5000

## Feito isso, o sistema estará funcionando e poderemos iniciar o projeto em um terceiro terminal com:

> npm run dev

## Front-end

- HTML5
- CSS3
- SCSS
- REACTJS

## Banco de dados

- JSON-SERVER

## Objetivo do sistema

O projeto visa automatizar a administração do negócio de revendedores, para que estes possam gerir suas vendas por meio de um sistema simples, intuitivo e com uma aparência agradável. Dessa forma será possível reduzir os erros humanos e otimizar o tempo do vendedor.

## Autor

Heitor Correia Montagnini Santos

https://www.linkedin.com/in/heitor-montagnini-03438a210/
