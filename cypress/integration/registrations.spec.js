describe('User Auth - Registrations', function() {
  it('can sign up', function() {
    cy.task('taskTruncateTables')
    cy.visit('/')
    cy.get('#signup-link').click()
    cy.get('#registrations-email').type('test@test.com')
    cy.get('#registrations-password').type('test12')
    cy.get('#registrations-submit').click()
    cy.url().should("contain", "/top-secret")
    cy.get('#welcome-message').should("contain", "Welcome, test@test.com!")
  })
})
