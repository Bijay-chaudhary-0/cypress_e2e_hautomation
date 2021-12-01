describe('Automation', () => {
    it.only('first test', () => {
        cy.visit('https://www.rahulshettyacademy.com/loginpagePractise/')
        cy.get('label.text-white[for="username"]')
            .contains('Username:')
        cy.get('input[name="terms"][type="checkbox"]')
            .click()
        cy.get('#username')
            .click()
            .type('This is automation')
    })

    it('second test', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    })

})