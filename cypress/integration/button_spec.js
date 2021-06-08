describe('Button test', () => {
    it('Adding value', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="button-add"]').click()
        cy.get('[data-test-id="value"]').should('have.text', '1')
    })
})
