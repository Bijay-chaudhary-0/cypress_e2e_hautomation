import contactpage from "../../support/POM"

const test = new contactpage

describe('testing', () => {
    it('first page object model', () => {
        test.visit()
        test.coding_ground()
        test.jav_script()
        cy.go('back')
    })
})