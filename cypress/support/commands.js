Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://front.serverest.dev/login')
  cy.get('[data-testid="email"]').type(email)
  cy.get('[data-testid="senha"]').type(senha)
  cy.get('[data-testid="entrar"]').click()
})
Cypress.Commands.add('abrirCadastroProduto', () => {
  cy.get('[data-testid="cadastrarProdutos"]').click()
  cy.contains('h1', 'Cadastro de Produtos').should('be.visible')
})

Cypress.Commands.add('preencherProduto', (nome, preco, descricao, quantidade) => {
  cy.get('[data-testid="nome"]').type(nome)
  cy.get('[data-testid="preco"]').type(preco)
  cy.get('[data-testid="descricao"]').type(descricao)
  cy.get('[data-testid="quantity"]').type(quantidade)
})

Cypress.Commands.add('salvarProduto', () => {
  // no site está escrito errado mesmo
  cy.get('[data-testid="cadastarProdutos"]').click()
})