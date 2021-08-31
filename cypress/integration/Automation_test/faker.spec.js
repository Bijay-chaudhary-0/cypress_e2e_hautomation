//install using npm i faker
var faker = require('faker')
const name = faker.name.firstName();
describe('first faker program', () => {
    it('testing', () => {
        cy.visit('https://nest.testbirds.com/home/tester')

        cy.xpath('//input[@name="firstname"]').type(name)

        cy.xpath('//input[@name="lastname"]')
            .type(faker.name.lastName())

        cy.xpath('//div[@class="sc-hGoxap fafhOX"] //input[@name="username"]')
            .type(faker.internet.userName())

        cy.xpath('//input[@name="email"]')
            .type(faker.internet.email())
        cy.xpath('//input[@name="plainPassword"]')
            .type(faker.internet.password())

        cy.get('.Select-placeholder')
            .type(faker.address.country() + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthDay')
            .type('03' + '{downarrow}{enter}')
        cy.get('#mui-component-select-birthMonth')
            .type('11' + '{downarrow}{enter}')

        cy.get('#mui-component-select-birthYear')
            .type('1999' + '{downarrow}{enter}')

        cy.get('#privacy')
            .click()

        cy.xpath('//div[@class="sc-bMvGRv iaoXLL"]/button[@type="submit"]')
            .click()
        cy.xpath('//div[@class="col-md-12"]/h1[@id="page-header"]')
            .should('have.text', 'Check your email')
    })
})