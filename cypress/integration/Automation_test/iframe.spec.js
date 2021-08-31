describe('first Iframe test', () => {
    it('whether it reads or not', () => {
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.url()
            .should('include', 'https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('.theme-btn.register-btn')
            .click()
    })
})