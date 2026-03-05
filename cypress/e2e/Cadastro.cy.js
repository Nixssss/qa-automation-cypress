describe('Cadastrar Produto', () => {
  beforeEach(() => {
    cy.env(['USER_EMAIL', 'USER_PASS']).then(({ USER_EMAIL, USER_PASS }) => {
      cy.login(USER_EMAIL, USER_PASS)
    })
  })
  it('Cadastro com sucesso', () => {
    const nomeProduto = `Computador ${Date.now()}`
    cy.abrirCadastroProduto()
    cy.preencherProduto(
      nomeProduto,
      '100',
      'Ryzen 7 8000, RTX 5090 e 16GB RAM',
      '1000'
    )
    cy.salvarProduto()
    cy.contains('h1', 'Lista dos Produtos').should('be.visible')
  })
})