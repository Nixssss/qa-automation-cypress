describe('Login', () => {
  it('Login com sucesso', () => {
    cy.env(['USER_EMAIL', 'USER_PASS']).then(({ USER_EMAIL, USER_PASS }) => {
    cy.login(USER_EMAIL, USER_PASS)
})
  })
  it('Login com senha inválida', () => {
    cy.env(['USER_EMAIL', 'USER_PASS']).then(({ USER_EMAIL}) => {
    cy.login(USER_EMAIL, 123)
})
  })
})