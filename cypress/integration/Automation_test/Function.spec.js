import * as kiss from '../../support/Function'
var faker = require('faker')
const num1 = faker.datatype.number({ min: 0, max: 50 })
const num2 = faker.datatype.number({ min: -20, max: 20 })
const operation = faker.datatype.number({ min: 0, max: 4 })
describe('Using functions', () => {
    beforeEach(() => {
        kiss.visit()
        kiss.Input_forums(num1, num2)
    })

    /* it('Input forums', () => {        

        kiss.Operation(operation)

        kiss.Calculate()

        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 - num2)
    }) */

    it('Addition', () => {
        kiss.operation()
        kiss.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 + num2)
    })
    it.only('Subtraction', () => {

        kiss.Subtract()
        kiss.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 - num2)
    })
    it('Multiplication', () => {
        kiss.Multiply()
        kiss.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 * num2)
    })
    it('Divide', () => {
        kiss.Divide()
        kiss.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', num1 / num2)
    })
    it('Concatinate', () => {
        kiss.concatinate()
        kiss.Calculate()
        cy.get('#numberAnswerField', { timeout: 5000 }).should('have.value', "" + num1 + num2)
        cy.log(PUSH)
    })

})