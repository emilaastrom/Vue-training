describe('template spec', () => {
  it('visit contact form', () => {
      cy.visit('/kontakt')
      cy.contains('h1', 'Kontakt oss')
  })

  it ('should have a disabled button before input', () => {
    cy.visit('/kontakt')
    cy.get('#inputButton').should('be.disabled')
  })

  it ('adding inputs should enable the button', () => {
    cy.visit('/kontakt')
    cy.get('#name').type('John Doe')
    cy.get('#inputButton').should('be.disabled')
    cy.get('#email').type('test@email.no')
    cy.get('#inputButton').should('be.disabled')
    cy.get('#message').type('This is a test message')
    cy.get('#inputButton').should('be.enabled')
  })

  it ('should not be able to submit without all fields', () => {
    cy.visit('/kontakt')
    cy.get('#name').type('John Doe')
    cy.get('#message').type('This is a test message')
    cy.get('#inputButton').should('be.disabled')
  })

  it ('should be able to submit with all fields, checking the alert box', () => {

    cy.visit('/kontakt')
    cy.get('#name').type('John Doe')
    cy.get('#email').type('john@do.e')
    cy.get('#message').type('This is a test message')
    cy.get('#inputButton').click()

    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy
      .get('button').contains('Send').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Hei John Doe 🤓 Vi har mottatt din henvendelse. Vi vil svare deg på john@do.e så snart som mulig.')
      })
  })


})