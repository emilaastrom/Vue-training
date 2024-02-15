// https://on.cypress.io/api

describe('E2E test #1', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Kalkulator i Vue.js!')
  })

  it('Clicking numbers and operators', () => {
    cy.visit('/')
    cy.get('#expressionField').type('2+3+5')
    cy.get('#equalsButton').click()
    cy.get('#expressionField').type('/2')
    cy.get('#equalsButton').click()
    cy.get('#expressionField').should('have.value', '5')
    cy.get('#expressionField').should('not.have.value', '5.5')
  })
})
