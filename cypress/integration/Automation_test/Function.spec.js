import * as func from '../../support/Function'
var faker = require('faker')
const num1 = faker.datatype.number({ min: 0, max: 50 })
const num2 = faker.datatype.number({ min: -20, max: 20 })
const operation = faker.datatype.number({ min: 0, max: 4 })
describe('Using functions', () => {
    beforeEach(() => {
        func.visit()
        func.Input_forums(num1, num2)
    })

    /* it('Input forums', () => {        

        func.Operation(operation)

        func.Calculate()

        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 - num2)
    }) */

    it('Addition', () => {
        func.operation()
        func.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 + num2)
    })
    it.only('Subtraction', () => {

        func.Subtract()
        func.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 - num2)
    })
    it('Multiplication', () => {
        func.Multiply()
        func.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 * num2)
    })
    it('Divide', () => {
        func.Divide()
        func.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 / num2)
    })
    it('Concatinate', () => {
        func.concatinate()
        func.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', "" + num1 + num2)
        cy.log(PUSH)
    })

})