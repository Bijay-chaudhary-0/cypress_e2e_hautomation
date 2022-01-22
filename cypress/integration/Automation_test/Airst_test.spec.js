describe('testing', () => {
    beforeEach('nigga', () => {
        let data = cy.generateString(4)
        cy.visit('https://testpages.herokuapp.com/styled/index.html')
    })
    it('first element', () => {
        cy.get('ul >li > #basicpagetest')
            .click()
    })
    it('second element', () => {
        cy.get('ul >li > #elementattributestest')
            .click()
    })
    it('third element', () => {
        cy.get('ul >li > #elementattributestest',{timeout: 4000})
            .click()
    })
})
