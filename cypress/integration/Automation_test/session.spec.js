var faker = require('faker')
const email = "Oppai@gmail.com"//faker.internet.email
const password = "Oppa09876"//faker.internet.password
describe('Using new feature Session', () => {

    it('first try', () => {
        cy.login(email,password)
       // cy.visit('')
    })
    it('see',()=>{
        cy.login(email,password)
    })
})