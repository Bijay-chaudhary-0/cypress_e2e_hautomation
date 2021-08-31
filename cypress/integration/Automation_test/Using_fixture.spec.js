describe('Using fixture feature', function () {
    beforeEach(function() {
        cy.fixture('example.json').then(function (data) {
            this.data=data
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('first_time', function () {
        cy.get('#checkBoxOption2')
            .check()
        cy.get('fieldset > #product > tbody > :nth-child(2) > :nth-child(3)')
            .should('have.text', this.data.num)
    })
    
    const dataJson=require('../../fixtures/example.json')
    it('using dataJson from fixture (another methode)',()=>{
        cy.get('#checkBoxOption2')
        .check()
    cy.get('fieldset > #product > tbody > :nth-child(2) > :nth-child(3)')
        .should('have.text', dataJson.num)
    })
})