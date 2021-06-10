describe('Subtracting test', () => {
    it('Subtract one', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-test-id="button-subtract"]').click()
        cy.get('[data-test-id="value"]').should('have.text', '-1')
    })
})
